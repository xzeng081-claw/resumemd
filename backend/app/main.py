from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .core.config import settings
from .core.database import init_db
from .api.v1 import auth, resumes, templates, export


app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="ResumeMD - Markdown 在线简历生成器 API",
)

# CORS 配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 生产环境需要限制
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    """应用启动时初始化数据库"""
    await init_db()


@app.get("/")
async def root():
    return {
        "name": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# 注册路由
app.include_router(auth.router, prefix="/api/v1/auth", tags=["认证"])
app.include_router(resumes.router, prefix="/api/v1/resumes", tags=["简历"])
app.include_router(templates.router, prefix="/api/v1/templates", tags=["模板"])
app.include_router(export.router, prefix="/api/v1/export", tags=["导出"])
