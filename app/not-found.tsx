import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sayfa Bulunamadı',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="page-main">
      <section className="status-page">
        <div className="container status-page-content">
          <p className="eyebrow">
            <span /> 404
          </p>
          <h1>Bu sayfa un ufak olmuş.</h1>
          <p>Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.</p>
          <div className="status-page-actions">
            <Link href="/" className="button button-gold">
              Anasayfaya Dön <ArrowRight size={17} />
            </Link>
            <Link href="/urunlerimiz" className="button button-status-outline">
              Ürünlerimize Bakın <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}