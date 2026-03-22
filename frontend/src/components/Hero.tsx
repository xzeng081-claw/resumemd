import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            用 Markdown 写简历
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            一键导出专业 PDF
          </p>
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            面向开发者的私有化简历工具
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              登录开始使用 →
            </Link>
            <a 
              href="/resume/demo" 
              className="text-blue-600 hover:text-blue-800 font-medium py-3 px-8 rounded-lg text-lg transition-colors"
            >
              查看公开简历示例
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
