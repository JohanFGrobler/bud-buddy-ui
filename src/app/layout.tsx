// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/Header';
import BackToTopButton from '@/components/buttons/backToTop/BackToTopButton'

const inter = Inter({
  subsets: ['latin'], // Specify the character subsets you need
  variable: '--font-inter', // Optional: Add a CSS variable for the font
  display: 'swap', // Use `swap` for faster text rendering
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
    <body className="max-w-screen-2xl mx-auto">
    <Header />
    <main>{children}</main>
    <BackToTopButton />
    </body>
    </html>
  );
}
