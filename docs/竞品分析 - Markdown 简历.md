# 竞品分析报告 - Markdown 在线简历

> 调研日期：2026-03-22  
> 调研人：韩信  
> 来源：GitHub 开源项目

---

## 📊 调研对象

通过 GitHub 搜索 `resume markdown`，筛选出 10 个高星项目，深度分析 3 个代表性项目。

### 搜索 Top 10
| 排名 | 项目 | 技术栈 | 特点 |
|------|------|--------|------|
| 1 | 木及简历 | React | 在线工具，有商业版 |
| 2 | YAMLResume | YAML | 代码化简历 |
| 3 | CodeCV | - | 在线制作，海量模板 |
| 4 | **oh-my-cv** | 前端 | 本地优先，功能丰富 |
| 5 | **markdown-resume** | Nuxt 3 | ATS 友好，开发者优化 |
| 6 | ResumeToJob | - | 简历制作网站 |
| 7 | **resume** | Next.js | 支持 Vercel/Netlify 部署 |
| 8 | resume-ai | LLM + Pandoc | AI 生成，本地隐私 |
| 9 | nextjs-resume | Next.js | 开发者简历模板 |
| 10 | resume | React + Vite | 个人简历 |

---

## 🔍 深度分析

### 1️⃣ oh-my-cv（功能最丰富）

**项目信息：**
- GitHub：`Renovamen/oh-my-cv`
- 在线演示：https://ohmycv.app/
- 定位：浏览器内、本地优先的 Markdown 简历构建器

**核心功能：**
| 功能 | 实现方式 |
|------|---------|
| Markdown 编辑 | 实时预览 |
| PDF 导出 | A4 / US Letter |
| 自动分页 | 类似 Word |
| 自定义样式 | 页边距、主题色、行高、字体 |
| 字体选择 | Google Fonts 集成 |
| 图标支持 | Iconify / Icônes |
| 数学公式 | KaTeX |
| 交叉引用 | 学术 CV 友好 |
| 大小写修正 | 自动（Github → GitHub） |
| LaTeX 语法 | `\\[10px]` 换行、`\\newpage` 分页 |
| 自定义 CSS | 高级定制 |
| 多简历管理 | 支持 |
| 离线使用 | PWA |
| 数据存储 | 本地浏览器（localForage） |
| 隐私保护 | 无追踪、无广告 |
| 深色模式 | 支持 |

**技术栈：**
- 前端：Vue 3 + Vite + UnoCSS
- 部署：GitHub Pages（静态站点）
- 存储：localForage（浏览器本地）

**优点：**
- ✅ 功能极其丰富
- ✅ 本地优先，隐私保护好
- ✅ 离线可用
- ✅ 开源免费

**缺点：**
- ❌ 数据仅本地存储，无云端备份（即将支持）
- ❌ 需要手动导出备份
- ❌ 无服务端渲染，PDF 生成在客户端

**可借鉴点：**
- 本地存储方案（快速、隐私）
- LaTeX 风格语法（分页/换行）
- 自动大小写修正
- 图标集成方案

---

### 2️⃣ markdown-resume（ATS 优化）

**项目信息：**
- GitHub：`junian/markdown-resume`
- 在线演示：https://www.junian.dev/markdown-resume/
- 定位：ATS 友好的 Markdown 简历编写器

**核心特点：**
| 特点 | 说明 |
|------|------|
| ATS 友好 | 使用 Web 安全字体，避免 ATS 解析问题 |
| 默认模板 | 接近 CareerCup 简历模板 |
| 默认颜色 | 全黑（安全色） |
| 导出格式 | PDF + HTML + DOCX |
| 数据隐私 | 本地存储，无追踪 |

**技术栈：**
- 前端：Nuxt 3 + Vue 3 + Vite + Zag + UnoCSS
- 部署：GitHub Pages
- 存储：localForage

**与 oh-my-cv 关系：**
- Fork 自 oh-my-cv
- 主要改进：ATS 优化、DOCX 导出、默认模板简化

**优点：**
- ✅ ATS 系统友好（关键差异化）
- ✅ 支持 DOCX 导出（HR 常用格式）
- ✅ 模板简洁专业

**缺点：**
- ❌ 功能相对较少
- ❌ 依赖 oh-my-cv 上游

**可借鉴点：**
- **ATS 友好设计**（核心卖点）
- DOCX 导出功能
- 默认模板设计（CareerCup 风格）

---

### 3️⃣ resume（部署友好）

**项目信息：**
- GitHub：`Dunqing/resume`
- 定位：支持 Vercel/Netlify/Cloudflare 部署的 Markdown 简历

**核心功能：**
| 功能 | 说明 |
|------|------|
| 深色模式 | 支持 |
| HTML 嵌入 | 支持 |
| PDF 打印 | 支持 |
| 在线预览 | 支持 |
| 多模板 | 支持 |
| 模板组合 | 支持 |
| 样式覆盖 | 支持 |

**技术栈：**
- 前端：React + Vite
- 组件库：@resumejs/components
- CLI：`create-resumejs`
- 部署：Vercel / Netlify / Cloudflare

**使用方式：**
```bash
# 方式 1：快速创建
pnpm create resumejs

# 方式 2：作为组件引入
pnpm add @resumejs/components
import { Resume } from '@resumejs/components'

# 方式 3：CLI 开发
pnpm add @resumejs/resume
resume dev
resume build
```

**模板系统：**
- `@resumejs/template-default` - 默认模板
- `@resumejs/template-nova` - Nova 模板
- 支持自定义模板

**Markdown 规范：**
- 一级标题：姓名 + 头部信息
- 三级标题：卡片式描述
- 表格：描述信息
- FrontMatter：配置项（深色模式、打印按钮等）

**优点：**
- ✅ 部署友好（一键 Vercel）
- ✅ 组件化设计（可嵌入其他项目）
- ✅ CLI 工具完善
- ✅ 模板系统灵活

**缺点：**
- ❌ 需要 React 基础
- ❌ 配置相对复杂

**可借鉴点：**
- **一键部署方案**（Vercel 集成）
- 组件化架构
- CLI 工具链
- 模板系统的设计

---

## 📈 功能对比矩阵

| 功能 | oh-my-cv | markdown-resume | resume | ResumeMD（我们） |
|------|----------|-----------------|--------|-----------------|
| Markdown 编辑 | ✅ | ✅ | ✅ | ✅ |
| 实时预览 | ✅ | ✅ | ✅ | ✅ |
| PDF 导出 | ✅ | ✅ | ✅ | ✅ |
| DOCX 导出 | ❌ | ✅ | ❌ | 🔄 待决定 |
| 多模板 | ✅ | ⚠️ 有限 | ✅ | 🔄 待决定 |
| 自定义样式 | ✅ | ⚠️ 有限 | ✅ | 🔄 待决定 |
| 本地存储 | ✅ | ✅ | ❌ | 🔄 待决定 |
| 云端存储 | ❌ | ❌ | ⚠️ 依赖平台 | ✅ 计划 |
| 离线使用 | ✅ | ✅ | ❌ | ❌ 不需要 |
| ATS 优化 | ❌ | ✅ | ❌ | ✅ 建议 |
| 一键部署 | ❌ | ❌ | ✅ | ✅ 计划 |
| 多简历管理 | ✅ | ✅ | ❌ | 🔄 待决定 |
| 深色模式 | ✅ | ✅ | ✅ | ✅ 计划 |
| AI 辅助 | ❌ | ❌ | ❌ | 🔄 可选 |

---

## 🎯 差异化机会

### 市场空白
1. **云端存储 + 本地编辑** - 结合两者优势
2. **ATS 优化 + 中文支持** - 现有项目多为英文优化
3. **一键部署到自有服务器** - 非 Vercel/Netlify
4. **AI 辅助撰写** - 简历内容优化建议
5. **访问统计** - 查看 HR 浏览记录（需后端）

### ResumeMD 定位建议

**核心价值：**
> 面向中文开发者的云端 Markdown 简历工具，支持自有服务器部署和 ATS 优化。

**差异化功能：**
| 功能 | 优先级 | 说明 |
|------|--------|------|
| 云端存储 | P0 | 自动保存，多设备同步 |
| ATS 优化 | P0 | 中文 ATS 友好格式 |
| 自有服务器部署 | P0 | 利用用户现有云服务器 |
| PDF + DOCX 导出 | P1 | 覆盖 HR 常用格式 |
| 多模板（中文） | P1 | 适合中文简历的模板 |
| AI 辅助撰写 | P2 | 内容优化建议 |
| 访问统计 | P2 | HR 浏览追踪 |
| 多简历版本 | P2 | 不同职位不同版本 |

---

## 🛠️ 技术选型建议

### 前端
| 方案 | 推荐度 | 理由 |
|------|--------|------|
| Next.js 14 | ⭐⭐⭐⭐⭐ | SSR/SEO、API Routes、部署灵活 |
| Nuxt 3 | ⭐⭐⭐⭐ | Vue 生态、功能类似 |
| Vite + React | ⭐⭐⭐ | 轻量，但需自建 SSR |

**推荐：Next.js 14**（与竞品 resume 一致，生态成熟）

### Markdown 编辑器
| 方案 | 推荐度 | 理由 |
|------|--------|------|
| TipTap | ⭐⭐⭐⭐⭐ | 富文本 + Markdown，可扩展 |
| React-Markdown | ⭐⭐⭐⭐ | 轻量，纯渲染 |
| MDX | ⭐⭐⭐ | 支持组件，但复杂 |

**推荐：TipTap**（oh-my-cv 类似方案，功能丰富）

### PDF 生成
| 方案 | 推荐度 | 理由 |
|------|--------|------|
| Puppeteer（服务端） | ⭐⭐⭐⭐⭐ | 格式稳定、可控 |
| html2pdf（客户端） | ⭐⭐ | 简单但格式问题多 |
| Playwright | ⭐⭐⭐⭐ | 类似 Puppeteer |

**推荐：Puppeteer**（服务端渲染，格式稳定）

### 数据存储
| 方案 | 推荐度 | 理由 |
|------|--------|------|
| SQLite | ⭐⭐⭐⭐⭐ | 简单、够用、易备份 |
| 本地文件 | ⭐⭐⭐⭐ | 更简单，但查询弱 |
| PostgreSQL | ⭐⭐ | 过重 |

**推荐：SQLite**（单文件，易管理）

### 部署
| 方案 | 推荐度 | 理由 |
|------|--------|------|
| Docker | ⭐⭐⭐⭐⭐ | 一次构建，到处运行 |
| PM2 | ⭐⭐⭐⭐ | Node.js 友好 |
| 直接部署 | ⭐⭐⭐ | 简单但维护难 |

**推荐：Docker**（用户云服务器环境未知，容器化最安全）

---

## 📋 功能优先级调整

基于竞品分析，调整原 PRD 优先级：

### P0（Must Have）
- [x] Markdown 编辑器（TipTap）
- [x] 实时预览
- [x] PDF 导出（Puppeteer）
- [x] 在线展示页
- [x] 云端存储（SQLite）
- [x] ATS 优化格式

### P1（Should Have）
- [ ] DOCX 导出（Pandoc）
- [ ] 多模板（至少 2 个中文模板）
- [ ] 深色模式
- [ ] Docker 部署方案

### P2（Could Have）
- [ ] AI 辅助撰写
- [ ] 访问统计
- [ ] 多简历版本管理
- [ ] 自定义 CSS

### P3（Later）
- [ ] 一键投递招聘平台
- [ ] 团队协作
- [ ] 付费功能

---

## 🎨 设计建议

### 模板设计
1. **默认模板** - 简洁专业（参考 CareerCup）
2. **现代模板** - 适合互联网/设计岗位
3. **学术模板** - 适合科研/教育岗位（含论文列表）

### ATS 优化要点
1. 使用标准字体（Arial、Times New Roman、宋体）
2. 避免复杂表格和图形
3. 标准章节标题（工作经历、教育背景等）
4. 纯黑色文字
5. 标准 A4 页面尺寸

---

## 📅 下一步行动

1. **确认技术方案** - Next.js + TipTap + Puppeteer + SQLite + Docker
2. **创建 GitHub 仓库** - 公开或私有？
3. **搭建项目脚手架** - Next.js 14 初始化
4. **设计默认模板** - ATS 友好的中文简历模板
5. **开发 MVP** - Phase 1（3-5 天）

---

## 🔗 参考链接

- [oh-my-cv](https://github.com/Renovamen/oh-my-cv)
- [markdown-resume](https://github.com/junian/markdown-resume)
- [resume](https://github.com/Dunqing/resume)
- [CareerCup 简历模板](https://web.archive.org/web/20240501052328/https://www.careercup.com/resume)
