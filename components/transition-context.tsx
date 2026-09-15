'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

/**
 * Sayfa geçişi sırasında navbar'daki GERÇEK logoyu gizleyip, onun yerine
 * PageTransition'ın merkeze/geri "uçurduğu" bir kopyasını göstermek için
 * Header ve PageTransition bileşenleri arasında paylaşılan tek bir durum.
 * İkisi de aynı ağacın altında (bkz. app/layout.tsx) olduğu için basit
 * bir Context yeterli — ayrı bir state yönetim kütüphanesine gerek yok.
 */
const TransitionContext = createContext<{
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;
}>({
  isTransitioning: false,
  setIsTransitioning: () => {},
});

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}