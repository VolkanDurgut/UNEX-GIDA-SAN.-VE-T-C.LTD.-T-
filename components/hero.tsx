'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero-photo.jpg" alt="" />
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <motion.h1
          className="hero-script"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Sizin lezzetiniz ne?
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Sıcacık bir ekmek mi? Nefis bisküviler mi? Romantik bir makarna akşamı mı? Yoksa unlarımızın paletiyle
          sanat mı yaratmak istiyorsunuz?
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/urunlerimiz" className="button button-gold">
            Ürünlerimizi Keşfedin <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div />
      </div>
    </section>
  );
}