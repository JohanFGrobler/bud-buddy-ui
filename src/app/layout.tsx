'use client'
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import BackToTopButton from '@/components/buttons/backToTop/BackToTopButton';
import Providers from './providers';
import {usePathname} from 'next/navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <html lang="en" className={inter.variable}>
    <body >
    <Providers>
      {path !== '/' && <Header />}
      <div className="max-w-screen-2xl mx-auto">
        <main>{children}</main>
        {path !== '/' && <BackToTopButton />}
      </div>
    </Providers>
    </body>
    </html>
  );
}
