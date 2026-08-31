'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { values } from '@/lib/data';
import { Reveal, RevealGroup, RevealItem } from './motion-primitives';

const EASE = [0.22, 1, 0.36, 1] as const;

function SettleItem({
  src,
  alt,
  style,
  delay,
}: {
  src: string;
  alt: string;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className="floating-object"
      style={style}
      initial={{ opacity: 0, y: 30, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  );
}

export function Together() {
  return (
    <section className="together section-padding">
      <div className="wheat-glow" />
      <div className="container together-grid">
        <Reveal>
          <motion.div
            className="together-visual"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <SettleItem
              src="/wheat-accent.png"
              alt="Buğday başağı"
              style={{ right: '2%', top: '8%', height: '72%', zIndex: 2 }}
              delay={0}
            />
            <SettleItem
              src="/baker-flour.png"
              alt="Baker Flour"
              style={{ left: '0%', bottom: 0, height: '82%', zIndex: 3 }}
              delay={0.15}
            />
            <SettleItem
              src="/multi-purpose-flour.png"
              alt="Multi-Purpose Flour"
              style={{ left: '36%', bottom: 0, height: '56%', zIndex: 4 }}
              delay={0.3}
            />
          </motion.div>
        </Reveal>

        <div className="together-copy">
          <Reveal delay={0.15}>
            <p className="eyebrow">
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