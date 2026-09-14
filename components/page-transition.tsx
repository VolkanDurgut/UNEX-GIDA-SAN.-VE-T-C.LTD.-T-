'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { EASE } from '@/lib/motion';

/**
 * Sayfalar arası geçişte kısa süreli (500ms) tam ekran bir overlay
 * gösterir, ortasında marka logosu yumuşakça büyüyüp beliriyor/kayboluyor.
 * `usePathname()` değişimini dinler — ilk sayfa yüklemesinde ÇALIŞMAZ
 * (isFirstRender kontrolü), sadece kullanıcı bir sayfadan diğerine
 * geçtiğinde tetiklenir. Teknik, UnexLidas projesindeki page-loader.tsx
 * deseninden uyarlanmıştır; logo animasyonu bizim eklememizdir.
 */
export function PageTransition() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (reduceMotion) return;
    const showTimer = setTimeout(() => setLoading(true), 0);
    const hideTimer = setTimeout(() => setLoading(false), 500);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname, reduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="page-transition-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="status"
          aria-label="Yükleniyor"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.38, ease: EASE }}
          >
            <Image src="/logo.png" alt="" width={72} height={72} priority />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}