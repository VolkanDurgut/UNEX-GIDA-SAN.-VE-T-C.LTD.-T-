'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/data';
import { FlourDust } from './flour-dust';
import { Reveal } from './motion-primitives';

const VISIBLE = 3;
const AUTO_ADVANCE_MS = 5000;

export function AboutSummary() {
  const maxIndex = products.length - VISIBLE;
  const positions = maxIndex + 1;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => setIndex((next + positions) % positions), [positions]);
  const goLeft = useCallback(() => goTo(index - 1), [goTo, index]);
  const goRight = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => goTo(index + 1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, paused, goTo]);

  return (
    <section className="intro-section intro-hero" id="hakkimizda">
      <motion.div
        className="intro-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image src="/about-bg.jpg" alt="" fill sizes="100vw" />
      </motion.div>
      <div className="intro-shade" />
      <FlourDust />
      <div className="intro-mist" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="intro-fade-top" />
      <div className="intro-fade-bottom" />

      <div className="container intro-hero-content">
        <div className="intro-hero-copy">
          <Reveal>
            <div className="intro-heading intro-heading-left">
              <h2>
                Lezzetin başladığı <em>yerde.</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="intro-copy">
              <p>Ham buğday tanesinden, dünyanın her mutfağındaki lezzete uzanan bir dönüşüm hikayesi.</p>
              <p>
                30 yılı aşkın deneyimimizle yüksek kaliteli buğday unlarını, ortaklarımızın başarısını büyütmek
                için üretiyoruz.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              className="about-carousel"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <button type="button" className="about-carousel-arrow" onClick={goLeft} aria-label="Önceki ürünler">
                <ChevronLeft size={22} />
              </button>

              <div className="about-carousel-viewport">
                <div
                  className="about-carousel-track"
                  style={{ transform: `translateX(-${index * (100 / products.length)}%)` }}
                >
                  {products.map((product) => (
                    <div className="about-carousel-item" key={product.slug}>
                      {product.image ? (
                        <div className="img-wrap">
                          <Image src={product.image} alt={product.name} fill sizes="(max-width: 900px) 33vw, 220px" />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <button type="button" className="about-carousel-arrow" onClick={goRight} aria-label="Sonraki ürünler">
                <ChevronRight size={22} />
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/hakkimizda" className="text-link text-link-light">
              Devamını Gör <ArrowUpRight size={17} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}