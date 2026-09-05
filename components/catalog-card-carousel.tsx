'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const IMAGES = [
  '/katalog-sayfa-lojistik.jpg',
  '/katalog-sayfa-deneyim.jpg',
  '/katalog-sayfa-urunler.jpg',
  '/katalog-sayfa-sertifika.jpg',
];

/** Masaüstü yuvaları: en öndeki (0) en üstte/solda, sona doğru kademeli
 *  olarak sağa/aşağıya kayıyor. */
const SLOTS_DESKTOP = [
  { top: 0, left: 0, rotate: 3, zIndex: 4 },
  { top: 58, left: 65, rotate: 4, zIndex: 3 },
  { top: 116, left: 130, rotate: 5, zIndex: 2 },
  { top: 174, left: 195, rotate: 6, zIndex: 1 },
];

/** Küçük ekranlarda kart boyutu düştüğü için aralıklar orantılı küçültülür. */
const SLOTS_COMPACT = [
  { top: 0, left: 0, rotate: 3, zIndex: 4 },
  { top: 35, left: 38, rotate: 4, zIndex: 3 },
  { top: 70, left: 76, rotate: 5, zIndex: 2 },
  { top: 105, left: 114, rotate: 6, zIndex: 1 },
];

/**
 * Katalog sayfası önizleme kartları: her birkaç saniyede bir, hangi
 * kartın "önde" olduğu döngüsel olarak değişir — statik bir yerleşim
 * değil, sürekli kendini yenileyen bir kart destesi hissi.
 */
export function CatalogCardCarousel() {
  const reduce = useReducedMotion();
  // order[slotIndex] = hangi görsel o yuvada duruyor
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const check = () => setCompact(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (reduce) return; // hareket azaltma tercihinde döngüyü hiç başlatma
    const id = setInterval(() => {
      setOrder((prev) => [...prev.slice(1), prev[0]]);
    }, 2800);
    return () => clearInterval(id);
  }, [reduce]);

  const slots = compact ? SLOTS_COMPACT : SLOTS_DESKTOP;

  return (
    <div className="catalog-pages-grid">
      {IMAGES.map((src, imageIndex) => {
        const slotIndex = order.indexOf(imageIndex);
        const slot = slots[slotIndex];
        return (
          <motion.div
            key={src}
            className="catalog-page-card"
            animate={{ top: slot.top, left: slot.left, rotate: slot.rotate, zIndex: slot.zIndex }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image src={src} alt="" width={900} height={636} />
          </motion.div>
        );
      })}
    </div>
  );
}
