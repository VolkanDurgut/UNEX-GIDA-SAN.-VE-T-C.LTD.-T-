import type { Metadata } from 'next';
import { products } from '@/lib/data';
import { PageHero } from '@/components/page-hero';
import { ProductCard } from '@/components/product-card';
import { RevealGroup, RevealItem } from '@/components/motion-primitives';

export const metadata: Metadata = {
  title: 'Ürünlerimiz',
  description:
    'Biscuit Flour, Multi-Purpose Flour, Baker Flour, Baker Plus Flour, Super Baker Flour ve Noodle & Pasta Flour — Unex Gıda buğday unu serisi.',
  alternates: {
    canonical: '/urunlerimiz',
  },
  openGraph: {
    title: 'Ürünlerimiz | Unex Gıda',
    description:
      'Biscuit Flour, Multi-Purpose Flour, Baker Flour, Baker Plus Flour, Super Baker Flour ve Noodle & Pasta Flour — Unex Gıda buğday unu serisi.',
    url: '/urunlerimiz',
    images: [{ url: '/kalitemiz-og.jpg', width: 1200, height: 630, alt: 'Unex Gıda Ürünleri' }],
  },
  twitter: {
    title: 'Ürünlerimiz | Unex Gıda',
    description:
      'Biscuit Flour, Multi-Purpose Flour, Baker Flour, Baker Plus Flour, Super Baker Flour ve Noodle & Pasta Flour — Unex Gıda buğday unu serisi.',
    images: ['/kalitemiz-og.jpg'],
  },
};

export default function ProductsPage() {
  return (
    <main className="page-main">
      <PageHero
        eyebrow="UNEX PALETİ"
        title={<>Ürünlerimiz<span>.</span></>}
        text="Her un, iyi bir fikrin ve daha iyi bir lezzetin başlangıcıdır."
        video="/urunlerimiz-hero.mp4"
        image="/quality-lab.jpg"
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
    </main>
  );
}