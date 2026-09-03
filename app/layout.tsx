import type { Metadata } from 'next';
import { Inter, Poppins, Caveat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-poppins', display: 'swap' });
const caveat = Caveat({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-caveat', display: 'swap' });

const siteUrl = 'https://www.unex.com.tr';
const siteName = 'Unex Gıda';
const defaultDescription =
  '30 yılı aşkın deneyimle 1 milyon tonun üzerinde buğday unu üreten, 50\'den fazla ülkeye ihracat yapan buğday unu üreticisi ve ihracatçısı.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Unex Gıda | Buğday Unu Üretimi ve İhracatı',
    template: '%s | Unex Gıda',
  },
  description: defaultDescription,
  keywords: [
    'buğday unu',
    'un ihracatı',
    'un üretici',
    'değirmencilik',
    'Unex Gıda',
    'flour manufacturer Turkey',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName,
    title: 'Unex Gıda | Buğday Unu Üretimi ve İhracatı',
    description: defaultDescription,
    images: [{ url: '/hero-photo.jpg', width: 1200, height: 630, alt: 'Unex Gıda' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unex Gıda | Buğday Unu Üretimi ve İhracatı',
    description: defaultDescription,
    images: ['/hero-photo.jpg'],
  },
  icons: {
    icon: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
  },
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