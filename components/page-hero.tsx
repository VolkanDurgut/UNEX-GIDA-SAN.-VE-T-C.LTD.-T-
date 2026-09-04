import { ReactNode } from 'react';
import Image from 'next/image';
import { Reveal } from './motion-primitives';

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  visual,
  theme = 'dark',
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  /** Fotoğraf yerine tamamen özel bir görsel bileşen (ör. harita, grafik). Verilirse `image` yok sayılır. */
  visual?: ReactNode;
  /** 'dark' (varsayılan): mevcut lacivert/fotoğraf üstü beyaz metin.
   *  'light': beyaz zemin, lacivert başlık — iki koyu bölümün art arda
   *  gelmesini istemediğimiz sayfalarda (örn. Hakkımızda) kullanılır. */
  theme?: 'dark' | 'light';
}) {
  return (
    <section className={`page-hero ${theme === 'light' ? 'page-hero-light' : ''}`}>
      {visual ? (
        <div className="page-hero-visual">{visual}</div>
      ) : image ? (
        <Image src={image} alt="" fill priority sizes="100vw" />
      ) : null}
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <Reveal>
          <p className={theme === 'light' ? 'eyebrow' : 'eyebrow light'}>
            <span /> {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{text}</p>
        </Reveal>
      </div>
    </section>
  );
}