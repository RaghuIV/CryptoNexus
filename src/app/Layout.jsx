// src/app/layout.jsx
import '../globals.css';
import { Providers } from './providers';
import NotificationContainer from '@/components/NotificationContainer';

export const metadata = {
  title: 'CryptoWeather Nexus',
  description: 'Your one-stop for Crypto and Weather updates',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-blue-600">
                CryptoWeather Nexus
              </h1>
              <nav>
                <a href="/dashboard" className="mx-2 hover:text-blue-600">
                  Dashboard
                </a>
              </nav>
            </div>
          </header>
          <NotificationContainer />
          <main className="flex-grow max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
              © 2025 CryptoWeather Nexus. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
