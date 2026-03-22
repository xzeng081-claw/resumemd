from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from typing import List
from uuid import UUID
import uuid

from ..deps import get_db, get_current_user
from ...models import Resume, User
from ...schemas import ResumeCreate, ResumeUpdate, ResumeResponse

router = APIRouter()


@router.get("/", response_model=List[ResumeResponse])
async def get_resumes(
    current_user: str = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """获取当前用户的简历列表"""
    # 先获取用户
    result = await db.execute(select(User).where(User.email == current_user))
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    
    # 获取简历列表
    result = await db.execute(select(Resume).where(Resume.user_id == user.id))
    resumes = result.scalars().all()
    
    return resumes


@router.get("/{resume_id}", response_model=ResumeResponse)
async def get_resume(
    resume_id: UUID,
    current_user: str = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """获取简历详情"""
    result = await db.execute(select(Resume).where(Resume.id == resume_id))
    resume = result.scalar_one_or_none()
    
    if not resume:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resume not found",
        )
    
    # 验证所有权
    if resume.user_id != (await get_user_id_by_email(db, current_user)):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized",
        )
    
    return resume


@router.post("/", response_model=ResumeResponse)
async def create_resume(
    resume_data: ResumeCreate,
    current_user: str = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """创建简历"""
    user_id = await get_user_id_by_email(db, current_user)
    
    resume = Resume(
        user_id=user_id,
        title=resume_data.title,
        content=resume_data.content,
        template_id=resume_data.template_id,
        is_public=resume_data.is_public,
        slug=str(uuid.uuid4())[:8],  # 生成简短 slug
    )
    
    db.add(resume)
    await db.commit()
    await db.refresh(resume)
    
    return resume


@router.put("/{resume_id}", response_model=ResumeResponse)
async def update_resume(
    resume_id: UUID,
    resume_data: ResumeUpdate,
    current_user: str = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """更新简历"""
    result = await db.execute(select(Resume).where(Resume.id == resume_id))
    resume = result.scalar_one_or_none()
    
    if not resume:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resume not found",
        )
    
    user_id = await get_user_id_by_email(db, current_user)
    if resume.user_id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized",
        )
    
    # 更新字段
    update_data = resume_data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(resume, field, value)
    
    await db.commit()
    await db.refresh(resume)
    
    return resume


@router.delete("/{resume_id}")
async def delete_resume(
    resume_id: UUID,
    current_user: str = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    """删除简历"""
    result = await db.execute(select(Resume).where(Resume.id == resume_id))
    resume = result.scalar_one_or_none()
    
    if not resume:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resume not found",
        )
    
    user_id = await get_user_id_by_email(db, current_user)
    if resume.user_id != user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Not authorized",
        )
    
    await db.delete(resume)
    await db.commit()
    
    return {"message": "Resume deleted"}


async def get_user_id_by_email(db: AsyncSession, email: str) -> UUID:
    """通过邮箱获取用户 ID"""
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalar_one_or_none()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found",
        )
    return user.id
