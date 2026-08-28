import type { Metadata } from 'next';
import { Inter, Poppins, Caveat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-poppins', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-caveat', display: 'swap' });

export const metadata: Metadata = {
  title: 'UNEX GIDA SAN. VE TİC.LTD.ŞTİ',
  description: 'Uluslararası buğday unu üretimi ve ihracatı.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" data-scroll-behavior="smooth" className={`${inter.variable} ${poppins.variable} ${caveat.variable}`}>
      <body className="site-shell">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}