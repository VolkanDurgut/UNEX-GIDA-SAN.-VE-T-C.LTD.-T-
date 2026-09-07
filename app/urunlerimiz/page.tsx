import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Wheat } from 'lucide-react';
import { products } from '@/lib/data';
import { PageHero } from '@/components/page-hero';
import { ProductCard } from '@/components/product-card';
import { ProductHeroBags } from '@/components/product-hero-bags';
import { Reveal, RevealGroup, RevealItem } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Ürünlerimiz',
  description:
    'Biscuit Flour, Multi-Purpose Flour, Baker Flour, Baker Plus Flour, Super Baker Flour ve Noodle & Pasta Flour — Unex Gıda buğday unu serisi.',
};

export default function ProductsPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="UNEX PALETİ"
        title={<>Ürünlerimiz<span>.</span></>}
        text="Her un, iyi bir fikrin ve daha iyi bir lezzetin başlangıcıdır."
        images={['/urunlerimiz-hero-marka.jpg', '/urunlerimiz-hero-lab.jpg']}
        imagesInterval={5000}
        foreground={<ProductHeroBags />}
        foregroundDelay={5}
      />
      <section className="section-padding product-list-section">
        <div className="container">
          <RevealGroup className="product-grid">
            {products.map((product) => (
              <RevealItem key={product.slug}>
                <ProductCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>

        </div>
      </section>

      <section className="statement-band">
        <Reveal className="container statement-inner">
          <Wheat size={25} />
          <h2>
            Aradığınız unu bulamadınız mı?
            <br />
            <em>Birlikte özel bir çözüm bulalım.</em>
          </h2>
          <Link href="/iletisim" className="button button-gold">
            Bize Ulaşın <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}