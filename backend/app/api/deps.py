from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from jose import JWTError, jwt
from datetime import datetime
from typing import Optional

from ..core.config import settings
from ..core.database import get_db

# 重新导出 get_db
__all__ = ["get_db", "get_current_user"]


async def get_current_user(token: Optional[str] = None) -> Optional[str]:
    """获取当前用户（可选认证）"""
    if not token:
        return None
    
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            return None
        return email
    except JWTError:
        return None
