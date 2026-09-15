'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  animate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { EASE } from '@/lib/motion';
import { useTransition } from './transition-context';

const navItems = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/urunlerimiz', label: 'Ürünlerimiz' },
  { href: '/kalitemiz', label: 'Kalitemiz' },
  { href: '/katalog', label: 'Katalog' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const { isTransitioning } = useTransition();
  const reduceMotion = useReducedMotion();

  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) return;
    const onScroll = () => setHomeScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomepage]);

  const transparent = isHomepage && !homeScrolled;

  // ===== Scroll ile dönen logo (UnexLidas projesinden uyarlanmıştır) =====
  // Kaydırma miktarına ORANTILI olarak logoyu 3D Y-ekseninde döndürür.
  // Kaydırma durduğunda (150ms hareketsizlik), açıyı en yakın tam tura
  // (360°'nin katı) bir "spring" ile yumuşakça yerleştirip sıfırlar —
  // böylece açı sonsuza kadar büyümez, ve durma anı her zaman görsel
  // olarak "düz" (0°) bir logo ile biter.
  const { scrollY } = useScroll();
  const logoRotateY = useMotionValue(0);
  const lastScrollY = useRef(0);
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (reduceMotion) return;

    const delta = latest - lastScrollY.current;
    lastScrollY.current = latest;

    // Anchor linkine atlama gibi büyük/anlık sıçramalarda çılgınca
    // dönmesin diye üst sınır.
    if (Math.abs(delta) > 150) return;

    logoRotateY.set(logoRotateY.get() + delta * 0.8);

    if (snapTimeout.current) clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      const currentAngle = logoRotateY.get();
      const targetAngle = Math.round(currentAngle / 360) * 360;
      animate(logoRotateY, targetAngle, { type: 'spring', stiffness: 200, damping: 20 }).then(() => {
        logoRotateY.set(0);
      });
    }, 150);
  });
  // ==========================================================

  return (
    <motion.header
      className={`header ${transparent ? 'header-transparent' : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Unex ana sayfa" style={{ perspective: 1000 }}>
          <motion.div style={{ rotateY: logoRotateY }}>
            <Image
              src="/logo.png"
              alt="Unex Gıda"
              width={47}
              height={47}
              priority
              className="brand-logo"
              style={{ opacity: isTransitioning ? 0 : 1, transition: 'opacity .15s' }}
            />
          </motion.div>
          <span>UNEX GIDA</span>
        </Link>

        <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menüyü aç">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/iletisim" className="nav-contact nav-contact-mobile" onClick={() => setMobileOpen(false)}>
            İletişim <ArrowUpRight size={15} />
          </Link>
        </nav>

        <Link href="/iletisim" className="nav-contact nav-contact-desktop">
          İletişim <ArrowUpRight size={15} />
        </Link>
      </div>
    </motion.header>
  );
}