'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="page-main">
      <section className="status-page">
        <div className="container status-page-content">
          <p className="eyebrow">
            <span /> Beklenmedik hata
          </p>
          <h1>Bir şeyler ters gitti.</h1>
          <p>Sayfa yüklenirken beklenmedik bir sorun oluştu. Tekrar deneyebilir ya da anasayfaya dönebilirsiniz.</p>
          <div className="status-page-actions">
            <button type="button" onClick={() => reset()} className="button button-gold">
              Tekrar Dene <RotateCw size={16} />
            </button>
            <Link href="/" className="button button-status-outline">
              Anasayfaya Dön <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}