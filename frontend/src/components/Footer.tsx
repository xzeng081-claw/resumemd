import Link from 'next/link';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Built with ❤️ by 曾星
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0 space-x-6">
            <a 
              href="https://github.com/xzeng081-claw/resumemd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700"
            >
              <Github className="h-6 w-6" />
            </a>
            <Link 
              href="/docs" 
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              文档
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
