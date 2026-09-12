'use client';

import { useEffect, useState } from 'react';

type Particle = {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => {
    // Ağırlıklı (power-distribution) rastgelelik: Math.random() düz/tekdüze
    // bir dağılım verir (her değer eşit olası). Gerçek un tozunda ise
    // parçacıkların çoğu küçük ve hafiftir, büyük/belirgin olanlar azdır.
    // Üssü (2.2) alarak 0'a yakın değerleri çok daha olası hale getiriyoruz —
    // bu da "çoğu küçük, nadiren büyük" dağılımını üretir.
    const sizeT = Math.pow(Math.random(), 2.2);
    const size = 2.5 + sizeT * 8.5;

    // Küçük/hafif parçacıklar havada daha uzun süzülür (düşük terminal hız),
    // büyük parçacıklar daha hızlı düşer — gerçek toz fiziğindeki
    // boyut/düşüş hızı ilişkisine benzer şekilde `size` ile ilişkilendirildi.
    const duration = 8 + (1 - sizeT) * 14;

    return {
      left: Math.random() * 100,
      size,
      duration,
      // Gecikme, artık kendi döngü süresiyle orantılı — böylece hem kısa
      // hem uzun süreli parçacıklar sahneye eşit dağılımla, rastgele
      // fazlarda giriyor (önceden sabit bir aralıktan bağımsız seçiliyordu).
      delay: -Math.random() * duration,
      drift: (Math.random() - 0.5) * 60,
      // Büyük parçacıklar daha belirgin (yüksek opaklık) görünür — küçükler
      // ince, sisli bir arka plan dokusu oluşturur.
      opacity: 0.2 + sizeT * 0.5,
    };
  });
}

export function FlourDust() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  useEffect(() => {
    // Parçacıklar bilinçli olarak sadece client'ta (mount sonrası) üretiliyor:
    // Math.random() sunucu render'ında çalışırsa server/client hydration uyuşmazlığı
    // (hydration mismatch) oluşur. Bu yüzden ilk render'da null dönüp, mount sonrası
    // state'i dolduruyoruz — react-hooks/set-state-in-effect burada kasıtlı bir istisna.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(makeParticles(34));
  }, []);

  if (!particles) return null;

  return (
    <div className="flour-dust" aria-hidden="true">
      {particles.map((p, i) => (
        <span
          key={i}
          className="flour-particle"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}