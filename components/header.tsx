'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { products } from '@/lib/data';

const navItems = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <motion.header
      className="header"
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
            <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown">
            <button
              className={`nav-link ${pathname?.startsWith('/urunlerimiz') ? 'active' : ''}`}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Ürünlerimiz <ChevronDown size={14} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {products.map((product) => (
                    <Link key={product.slug} href={`/urunlerimiz/${product.slug}`} onClick={() => setProductsOpen(false)}>
                      {product.name}
                      <ArrowUpRight size={14} />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/kalitemiz" className={`nav-link ${pathname === '/kalitemiz' ? 'active' : ''}`}>
            Kalitemiz
          </Link>
          <Link href="/katalog" className={`nav-link ${pathname === '/katalog' ? 'active' : ''}`}>
            Katalog
          </Link>
          <Link href="/iletisim" className="nav-contact">
            İletişim <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}