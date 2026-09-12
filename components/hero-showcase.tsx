'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * "Reklam vitrini" hero: video bir kez oynar, bitince (onEnded) yumuşak bir
 * crossfade ile sabit bir fotoğrafa geçilir; fotoğraf `imageDuration` kadar
 * ekranda kalır, sonra tekrar crossfade ile videoya dönülür (video yeniden
 * baştan oynatılır) — döngü sonsuza kadar sürer. Sitenin diğer yerlerinde
 * zaten kullanılan AnimatePresence crossfade deseniyle aynı tekniği kullanır.
 */
export function HeroShowcase({
  video,
  image,
  /** Fotoğrafın ekranda kalacağı süre (ms) — sonra videoya geri dönülür. */
  imageDuration = 6000,
}: {
  video: string;
  image: string;
  imageDuration?: number;
}) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (!showImage) return;
    const timer = setTimeout(() => setShowImage(false), imageDuration);
    return () => clearTimeout(timer);
  }, [showImage, imageDuration]);

  return (
    <div className="hero-showcase">
      <AnimatePresence>
        {showImage ? (
          <motion.div
            key="image"
            className="hero-showcase-frame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <Image src={image} alt="" fill sizes="100vw" />
          </motion.div>
        ) : (
          <motion.video
            key="video"
            className="page-hero-video"
            src={video}
            autoPlay
            muted
            playsInline
            aria-hidden="true"
            onEnded={() => setShowImage(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}