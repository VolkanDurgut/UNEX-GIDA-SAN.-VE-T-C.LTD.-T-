'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { EASE } from '@/lib/motion';

/**
 * Next.js'in özel dosya kuralı: layout.tsx'in aksine, her sayfa
 * geçişinde YENİDEN mount olur — bu yüzden "initial" animasyonu her
 * navigasyonda tekrar tetiklenir. Sadece {children} (sayfa içeriği)
 * sarmalanıyor; Header/Footer (layout.tsx'te) etkilenmez, sabit kalır.
 * Teknik, UnexLidas projesindeki app/[lang]/template.tsx'ten uyarlanmıştır.
 */
export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}