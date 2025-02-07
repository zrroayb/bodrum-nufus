import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Providers from './providers';
import ScrollToTop from './components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bodrum Nüfus',
  description: 'Bodrum nüfus bilgileri ve istatistikleri',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
