const Features = () => {
  const features = [
    {
      icon: '📝',
      title: 'Markdown 编辑',
      description: '开发者熟悉的编辑方式',
    },
    {
      icon: '📄',
      title: 'PDF 导出',
      description: '一键生成专业格式',
    },
    {
      icon: '🎨',
      title: '多模板切换',
      description: '多种风格可选',
    },
    {
      icon: '🔒',
      title: '私有部署',
      description: '数据完全私有安全可控',
    },
    {
      icon: '⚡',
      title: '实时预览',
      description: '编辑即刻可见',
    },
    {
      icon: '🎯',
      title: 'ATS 优化',
      description: '通过招聘系统筛选',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择 ResumeMD</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            专为开发者打造的简历工具，简洁高效，功能强大
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
