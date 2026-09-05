'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Hero fotoğrafını sabit tek bir kare yerine, birden fazla gerçek fotoğraf
 * arasında otomatik, yumuşak bir crossfade ile döndürür — sinematik bir
 * "klip" hissi verir, video prodüksiyonuna gerek kalmadan.
 */
export function HeroSlideshow({
  images,
  interval = 5500,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="hero-slideshow">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          className="hero-slideshow-frame"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        >
          <Image src={images[index]} alt="" fill priority sizes="100vw" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
