import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: '经典简约',
      description: '简洁大方的设计，突出重点信息',
      preview: 'preview-classic',
      featured: true,
    },
    {
      id: 2,
      name: '现代商务',
      description: '专业的商务风格，适合正式场合',
      preview: 'preview-business',
      featured: true,
    },
    {
      id: 3,
      name: '创意个性',
      description: '富有创意的设计，展现个人特色',
      preview: 'preview-creative',
      featured: false,
    },
    {
      id: 4,
      name: '技术极客',
      description: '针对技术人员的专门设计',
      preview: 'preview-tech',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            返回首页
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">简历模板中心</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            选择适合您的简历模板，快速创建专业的求职简历
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {templates.map((template) => (
            <div 
              key={template.id} 
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${template.featured ? 'border-2 border-blue-500' : ''}`}
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📄</div>
                  <p className="text-gray-600">模板预览</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
                    <p className="text-gray-600 mt-1">{template.description}</p>
                  </div>
                  {template.featured && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      推荐
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                    使用此模板
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}