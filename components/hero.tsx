'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <motion.p
          className="eyebrow light"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span /> HER TANEDE BİR MİRAS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          What is your <em>flavor?</em>
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          A warm bread? Soothing biscuits? A romantic pasta night? Or do you just want to create art through the
          palette of our flours?
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