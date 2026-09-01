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
  return Array.from({ length: count }, () => ({
    left: Math.random() * 100,
    size: 3 + Math.random() * 7,
    duration: 9 + Math.random() * 10,
    delay: -Math.random() * 18,
    drift: (Math.random() - 0.5) * 60,
    opacity: 0.25 + Math.random() * 0.45,
  }));
}

export function FlourDust() {
  const [particles, setParticles] = useState<Particle[] | null>(null);

  useEffect(() => {
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