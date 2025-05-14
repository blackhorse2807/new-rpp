import './globals.css';
import { lora } from '../fonts/lora';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import 'remixicon/fonts/remixicon.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}