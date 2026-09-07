'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * PageHero'nun "foreground" katmanını verilen gecikmeyle yumuşakça belirtir.
 * Bilinçli olarak ayrı bir 'use client' dosyası — framer-motion'ın `motion`
 * API'si doğrudan bir sunucu bileşeni (page-hero.tsx) içinde kullanılamaz;
 * bu da projedeki Reveal/RevealGroup ile birebir aynı desen.
 */
export function HeroForegroundReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="page-hero-foreground"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: reduce ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
