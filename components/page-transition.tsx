'use client';

import { useAnimate, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { EASE } from '@/lib/motion';
import { useTransition } from './transition-context';

const OVERLAY_LOGO_SIZE = 72;
const FLY_DURATION = 0.42;
const HOLD_DURATION = 0.22;

/**
 * Sayfa geçişinde navbar'daki GERÇEK logo (header.tsx, ".brand-logo")
 * anlık olarak gizlenir (bkz. transition-context.tsx) ve onun yerine bu
 * bileşenin çizdiği bir "klon" logo, navbar'ın TAM O ANKİ ekran
 * konumundan (getBoundingClientRect ile ölçülüyor) merkeze doğru büyüyerek
 * uçar, kısa bir süre bekler (yeni sayfa bu sırada arkada hazırlanır),
 * sonra aynı yoldan küçülerek navbar'daki orijinal konumuna geri döner.
 * Klonun son karesi orijinal logoyla birebir aynı konum/boyutta olduğu
 * için, gerçek logo tekrar görünür kılındığında hiçbir sıçrama olmaz.
 *
 * `usePathname()` değişimini dinler. NOT: "pathname === prevPathname.current"
 * karşılaştırması kullanılıyor (basit bir "isFirstRender boolean'ı" değil)
 * — çünkü React'in geliştirme modunda efektleri bilerek iki kez çalıştırma
 * davranışı (Strict Mode), böyle bir boolean'ı kandırıp sayfa ilk
 * yüklendiğinde geçişi sahte şekilde tetikleyebiliyordu.
 */
export function PageTransition() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const reduceMotion = useReducedMotion();
  const { setIsTransitioning } = useTransition();
  const [overlayScope, animateOverlay] = useAnimate();
  const [logoScope, animateLogo] = useAnimate();

  useEffect(() => {
    if (pathname === prevPathname.current) return;
    prevPathname.current = pathname;
    if (reduceMotion) return;

    let cancelled = false;

    async function run() {
      const navLogo = document.querySelector<HTMLElement>('.brand-logo');
      if (!navLogo) return;

      const navRect = navLogo.getBoundingClientRect();
      const viewportCx = window.innerWidth / 2;
      const viewportCy = window.innerHeight / 2;
      const navCx = navRect.left + navRect.width / 2;
      const navCy = navRect.top + navRect.height / 2;
      const startX = navCx - viewportCx;
      const startY = navCy - viewportCy;
      const startScale = navRect.width / OVERLAY_LOGO_SIZE;

      // Klonu, gerçek logonun tam konum/boyutunda, ANİMASYONSUZ olarak
      // konumlandır — böylece geçiş başladığında hiçbir sıçrama olmaz.
      animateLogo(logoScope.current, { x: startX, y: startY, scale: startScale, opacity: 1 }, { duration: 0 });
      setIsTransitioning(true);
      animateOverlay(overlayScope.current, { opacity: 1 }, { duration: 0.15 });

      if (cancelled) return;
      // Merkeze uç
      await animateLogo(logoScope.current, { x: 0, y: 0, scale: 1 }, { duration: FLY_DURATION, ease: EASE });

      if (cancelled) return;
      // Kısa bekleme (yeni sayfa arkada hazırlanıyor)
      await new Promise((resolve) => setTimeout(resolve, HOLD_DURATION * 1000));

      if (cancelled) return;
      // Navbar'daki orijinal konumuna geri uç
      await animateLogo(
        logoScope.current,
        { x: startX, y: startY, scale: startScale },
        { duration: FLY_DURATION, ease: EASE }
      );

      if (cancelled) return;
      await animateOverlay(overlayScope.current, { opacity: 0 }, { duration: 0.18 });
      setIsTransitioning(false);
    }

    run();

    return () => {
      cancelled = true;
      setIsTransitioning(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div ref={overlayScope} className="page-transition-overlay" style={{ opacity: 0 }} role="status" aria-label="Yükleniyor">
      <div ref={logoScope} className="page-transition-logo" style={{ opacity: 0 }}>
        <Image src="/logo.png" alt="" width={OVERLAY_LOGO_SIZE} height={OVERLAY_LOGO_SIZE} priority />
      </div>
    </div>
  );
}