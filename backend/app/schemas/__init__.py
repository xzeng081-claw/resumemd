from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from uuid import UUID


# ============ User ============

class UserBase(BaseModel):
    email: EmailStr


class UserCreate(UserBase):
    password: str


class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    password: Optional[str] = None


class UserResponse(UserBase):
    id: UUID
    created_at: datetime
    
    class Config:
        from_attributes = True


# ============ Resume ============

class ResumeBase(BaseModel):
    title: str
    content: str  # Markdown


class ResumeCreate(ResumeBase):
    template_id: Optional[UUID] = None
    is_public: bool = False


class ResumeUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    template_id: Optional[UUID] = None
    is_public: Optional[bool] = None


class ResumeResponse(ResumeBase):
    id: UUID
    user_id: UUID
    template_id: Optional[UUID]
    is_public: bool
    slug: Optional[str]
    created_at: datetime
    updated_at: Optional[datetime]
    
    class Config:
        from_attributes = True


# ============ Template ============

class TemplateBase(BaseModel):
    name: str
    description: Optional[str] = None
    css: str
    html_template: str


class TemplateCreate(TemplateBase):
    is_default: bool = False


class TemplateUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    css: Optional[str] = None
    html_template: Optional[str] = None
    is_default: Optional[bool] = None


class TemplateResponse(TemplateBase):
    id: UUID
    is_default: bool
    created_at: datetime
    
    class Config:
        from_attributes = True


# ============ Auth ============

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TokenData(BaseModel):
    email: Optional[str] = None


# ============ Export ============

class ExportPDFRequest(BaseModel):
    resume_id: UUID
    template_id: Optional[UUID] = None


class ExportPDFResponse(BaseModel):
    pdf_url: str
    filename: str
