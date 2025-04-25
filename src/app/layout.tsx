import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Providers from '@/providers/Providers';
import { Toaster } from 'sonner';

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Medigo Shop',
  description: 'A Medicine E-commerce Shop',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${rubik.variable} antialiased`}>
        <Providers>
          <Toaster richColors position='bottom-center' />
          {children}
        </Providers>
      </body>
    </html>
  );
}
