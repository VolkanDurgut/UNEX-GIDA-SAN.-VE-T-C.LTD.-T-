import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, PackageOpen } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion-primitives';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return notFound();

  return (
    <main className="page-main">
      <section className="product-detail section-padding">
        <div className="container detail-grid">
          <Reveal direction="left">
            <div className={`detail-visual ${product.image ? 'has-image' : ''}`}>
              {product.image ? (
                <img src={product.image} alt={product.name} />
              ) : (
                <div className="placeholder large">
                  <PackageOpen size={38} />
                  <span>
                    Gerçek ürün görseli
                    <br />
                    taslak sonrası eklenecek
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="detail-copy">
              <p className="eyebrow">UNEX UN SERİSİ</p>
              <h1>{product.name}</h1>
              <p className="detail-lead">{product.description}</p>

              <div className="specs">
                {product.specs.map(([label, value]) => (
                  <div className="spec" key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
              <Link href="/iletisim" className="button button-gold">
                Sipariş hakkında konuşalım <ArrowRight size={17} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="related section-padding">
        <div className="container">
          <Reveal>
            <p className="eyebrow">PALETİN GERİ KALANI</p>
            <h2>İlginizi çekebilir</h2>
          </Reveal>
          <RevealGroup className="related-strip">
            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 5)
              .map((item) => (
                <RevealItem key={item.slug}>
                  <ProductCard product={item} />
                </RevealItem>
              ))}
          </RevealGroup>
        </div>
      </section>
    </main>
  );
}