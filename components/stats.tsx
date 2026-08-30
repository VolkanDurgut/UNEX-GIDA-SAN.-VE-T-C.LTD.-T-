'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats } from '@/lib/data';

function splitNumber(raw: string): { number: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: Number(match[1]), suffix: match[2] };
}

function Counter({ value }: { value: string }) {
  const { number, suffix } = splitNumber(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, { duration: 1.4, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [inView, number, count]);

  return (
    <strong ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </strong>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([number, label], index) => (
          <motion.div
            className="stat"
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
          >
            <Counter value={number} />
            <span>{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}