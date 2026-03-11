import './globals.css';

export const metadata = {
  title: 'Plant Disease Identifier',
  description: 'AI-Powered Crop Disease Detection System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans text-gray-900">
        <header className="bg-green-600 text-white py-4 shadow-md">
          <div className="max-w-5xl mx-auto px-4 flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <h1 className="text-2xl font-bold tracking-wide">AgriVision AI</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}