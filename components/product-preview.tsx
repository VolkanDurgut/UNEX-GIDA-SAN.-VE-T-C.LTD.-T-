'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './product-card';
import { Reveal } from './motion-primitives';

const AUTO_ADVANCE_MS = 4000;

export function ProductPreview() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollToIndex = useCallback((next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>('.product-card');
    const card = cards[next];
    if (card) {
      track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
    }
  }, []);

  const goNext = useCallback(() => {
    setIndex((current) => {
      const next = (current + 1) % products.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      const next = (current - 1 + products.length) % products.length;
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goNext, paused]);

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

        <div
          ref={trackRef}
          className="product-strip is-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="strip-controls">
          <span>
            0{index + 1} — 0{products.length}
          </span>
          <div>
            <button aria-label="Önceki" onClick={goPrev}>
              <ChevronLeft size={18} />
            </button>
            <button aria-label="Sonraki" onClick={goNext}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}