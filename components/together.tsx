'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { values } from '@/lib/data';
import { Reveal, RevealGroup, RevealItem } from './motion-primitives';

function FloatingItem({
  src,
  alt,
  style,
  duration,
  delay,
}: {
  src: string;
  alt: string;
  style: React.CSSProperties;
  duration: number;
  delay: number;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="floating-object"
      style={style}
      animate={{ y: [0, -14, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export function Together() {
  return (
    <section className="together section-padding">
      <div className="wheat-glow" />
      <div className="container together-grid">
        <Reveal direction="left">
          <div className="together-visual">
            <FloatingItem
              src="/wheat-accent.png"
              alt="Buğday başağı"
              style={{ right: '2%', top: '8%', height: '72%', zIndex: 2 }}
              duration={5}
              delay={0}
            />
            <FloatingItem
              src="/baker-flour.png"
              alt="Baker Flour"
              style={{ left: '0%', bottom: 0, height: '82%', zIndex: 3 }}
              duration={6}
              delay={0.4}
            />
            <FloatingItem
              src="/multi-purpose-flour.png"
              alt="Multi-Purpose Flour"
              style={{ left: '36%', bottom: 0, height: '56%', zIndex: 4 }}
              duration={5.5}
              delay={0.9}
            />
          </div>
        </Reveal>

        <div className="together-copy">
          <Reveal direction="right">
            <p className="eyebrow light">
              <span /> SÖZÜMÜZ
            </p>
            <h2>
              Birlikte
              <br />
              <em>Büyüyoruz</em>
            </h2>
          </Reveal>

          <RevealGroup className="value-list">
            {values.map((value, index) => (
              <RevealItem className="value-item" key={value}>
                <span>0{index + 1}</span>
                <Check size={16} />
                {value}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}