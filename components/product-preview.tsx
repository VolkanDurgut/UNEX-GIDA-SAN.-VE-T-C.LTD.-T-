import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './product-card';
import { Reveal, RevealGroup, RevealItem } from './motion-primitives';

export function ProductPreview() {
  return (
    <section className="products-section section-padding">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">UNEX PALETİ</p>
              <h2>Ürünlerimiz</h2>
            </div>
            <Link href="/urunlerimiz" className="text-link">
              Tüm ürünleri gör <ArrowUpRight size={17} />
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="product-strip">
          {products.slice(0, 4).map((product) => (
            <RevealItem key={product.slug}>
              <ProductCard product={product} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="strip-controls">
          <span>01 — 04</span>
          <div>
            <button aria-label="Önceki">
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Sonraki">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}