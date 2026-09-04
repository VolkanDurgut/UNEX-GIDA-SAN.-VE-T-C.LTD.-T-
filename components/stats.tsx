'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { CalendarClock, Wheat, Globe } from 'lucide-react';
import { stats } from '@/lib/data';

const ICONS = [CalendarClock, Wheat, Globe];

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.4, ease: 'easeOut' });
      return () => controls.stop();
    }
  }, [inView, value, count]);

  return (
    <strong ref={ref}>
      <motion.span>{rounded}</motion.span>
    </strong>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(({ value, suffix, label }, index) => {
          const Icon = ICONS[index];
          return (
            <motion.div
              className="stat"
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              {Icon ? (
                <div className="stat-icon">
                  <Icon size={22} />
                </div>
              ) : null}
              <div className="stat-value">
                <Counter value={value} />
                <span className="stat-suffix">{suffix}</span>
              </div>
              <span className="stat-label">{label}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
