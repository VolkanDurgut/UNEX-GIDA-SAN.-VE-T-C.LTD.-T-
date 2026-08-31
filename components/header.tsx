'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);

  const isHomepage = pathname === '/';

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHomepage]);

  const transparent = isHomepage && !scrolled;

  return (
    <motion.header
      className={`header ${transparent ? 'header-transparent' : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Unex ana sayfa">
          <img src="/logo.png" alt="Unex" />
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