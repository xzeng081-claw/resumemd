import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Resume<span className="text-blue-600">MD</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Create beautiful Markdown resumes with live preview and PDF export
          </p>
          
          <div className="space-y-4">
            <Link 
              href="/editor"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              Start Writing Now
            </Link>
            
            <div className="mt-12 text-left bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How it works</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Write your resume in Markdown format</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>See live preview as you type</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Export to PDF with professional formatting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
