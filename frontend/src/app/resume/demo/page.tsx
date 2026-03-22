import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

export default function DemoResume() {
  // 示例简历内容
  const demoResumeContent = `# 张三 - 软件工程师

## 联系方式
- 邮箱：zhangsan@example.com
- 电话：138-0000-0000
- GitHub：https://github.com/zhangsan
- 地址：北京市朝阳区

## 个人简介
5年经验的全栈开发工程师，专注于Web应用开发，熟悉React、Node.js、Python等技术栈。

## 工作经历

### ABC科技有限公司 | 高级前端工程师 | 2021.03 - 至今
- 负责公司核心产品的前端开发工作
- 使用React、TypeScript重构核心模块，提升性能30%
- 带领2人小组完成移动端适配项目

### XYZ互联网公司 | 前端工程师 | 2019.06 - 2021.02
- 参与多个业务线的前端开发
- 使用Vue.js开发内部管理系统
- 优化页面加载速度，减少首屏时间40%

## 项目经验

### 企业级后台管理系统
- 技术栈：React + TypeScript + Redux + Ant Design
- 负责整个系统的前端架构设计和核心模块开发
- 实现了动态路由、权限控制、国际化等功能

### 移动端H5活动页面
- 技术栈：Vue.js + Vant + SCSS
- 开发了多款营销活动页面，平均转化率提升15%
- 适配多种手机型号，保证用户体验一致

## 技能清单
- **前端**: JavaScript, TypeScript, React, Vue.js, HTML/CSS
- **后端**: Node.js, Python, Express, Django
- **数据库**: MySQL, MongoDB, Redis
- **工具**: Git, Webpack, Docker, Jenkins

## 教育背景
北京大学 | 计算机科学与技术 | 本科 | 2015.09 - 2019.06
`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link 
            href="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            返回首页
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <article className="prose max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">张三 - 软件工程师</h1>
            <p className="text-gray-600 mb-8">这是一份使用 ResumeMD 生成的示例简历</p>
            
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mt-4 mb-4 text-gray-900" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-xl font-semibold mt-8 mb-3 text-gray-800" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4 text-gray-700" {...props} />,
                ul: ({ node, ...props }) => <ul className="ml-4 list-disc my-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="ml-4 list-decimal my-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-2 text-gray-700" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold text-gray-800" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                code: ({ node, inline, ...props }) => {
                  if (inline) {
                    return <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />;
                  }
                  return <code className="block bg-gray-800 text-gray-100 p-4 rounded my-4 overflow-x-auto font-mono text-sm" {...props} />;
                },
                pre: ({ node, ...props }) => <pre className="bg-gray-800 text-gray-100 p-4 rounded my-4 overflow-x-auto" {...props} />,
              }}
            >
              {demoResumeContent}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}