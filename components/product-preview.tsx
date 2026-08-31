'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from './product-card';
import { Reveal } from './motion-primitives';

const PAGE_SIZE = 3;
const AUTO_ADVANCE_MS = 5000;

export function ProductPreview() {
  const pages = useMemo(() => {
    const chunks: (typeof products)[] = [];
    for (let i = 0; i < products.length; i += PAGE_SIZE) {
      chunks.push(products.slice(i, i + PAGE_SIZE));
    }
    return chunks;
  }, []);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => setPage((next + pages.length) % pages.length), [pages.length]);

  useEffect(() => {
    if (paused || pages.length < 2) return;
    const timer = setInterval(() => goTo(page + 1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [page, paused, pages.length, goTo]);

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

        <Reveal delay={0.1}>
          <div className="product-strip" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                className="product-strip-track"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {pages[page].map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {pages.length > 1 && (
            <div className="dots">
              {pages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Sayfa ${index + 1}`}
                  className={index === page ? 'is-active' : ''}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}