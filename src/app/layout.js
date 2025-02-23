export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="p-4 bg-blue-600 text-white text-center">
          <h1 className="text-2xl font-bold">Wipix Studio</h1>
        </nav>
        {children}
        <footer className="text-center p-4 bg-gray-800 text-white mt-10">
          © 2025 Wipix Studio. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
