# ResumeMD - Markdown 在线简历生成器

> 面向开发者的轻量级在线简历工具，支持 Markdown 编辑和 PDF 导出。

## 🚀 快速开始

### 环境要求

- Node.js v18+
- Python 3.11+
- Docker + Docker Compose（可选）

### 开发模式

#### 1. 启动数据库和中间件

```bash
docker-compose up postgres redis
```

#### 2. 启动后端

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

访问 http://localhost:8000/docs 查看 API 文档

#### 3. 启动前端

```bash
cd frontend
npm install
npm run dev
```

访问 http://localhost:3000

### Docker 一键启动

```bash
docker-compose up -d
```

## 📁 项目结构

```
resumemd/
├── frontend/          # Next.js 前端
│   ├── app/          # App Router
│   ├── components/   # 组件
│   └── ...
├── backend/          # FastAPI 后端
│   ├── app/
│   │   ├── api/     # 路由
│   │   ├── models/  # 数据模型
│   │   ├── schemas/ # Pydantic 模型
│   │   └── ...
│   └── ...
├── docker-compose.yml
└── README.md
```

## 🛠️ 技术栈

### 前端
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Monaco Editor
- react-markdown

### 后端
- FastAPI
- SQLAlchemy (Async)
- PostgreSQL
- JWT 认证
- Puppeteer (PDF 生成)

## 📝 API 文档

启动后端后访问：http://localhost:8000/docs

### 主要接口

- `POST /api/v1/auth/register` - 注册
- `POST /api/v1/auth/login` - 登录
- `GET /api/v1/resumes` - 获取简历列表
- `POST /api/v1/resumes` - 创建简历
- `PUT /api/v1/resumes/{id}` - 更新简历
- `POST /api/v1/export/pdf` - 导出 PDF

## 📄 许可证

MIT
