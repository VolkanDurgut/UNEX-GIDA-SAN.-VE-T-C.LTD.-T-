import { ReactNode } from 'react';
import Image from 'next/image';
import { Reveal } from './motion-primitives';
import { FlourDust } from './flour-dust';
import { HeroSlideshow } from './hero-slideshow';
import { HeroShowcase } from './hero-showcase';

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  images,
  video,
  visual,
  overlayImage,
  theme = 'dark',
  flourDust = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  /** Birden fazla fotoğraf verilirse otomatik crossfade slideshow'a geçilir (`image` yok sayılır). */
  images?: string[];
  /** Sabit fotoğraf/slideshow yerine otomatik oynatılan, sessiz bir arka plan
   *  videosu. Sadece `video` verilirse döngüsel (loop) oynar. `video` İLE
   *  BİRLİKTE `image` de verilirse "vitrin" moduna geçilir: video bir kez
   *  oynar, bitince crossfade ile `image`'a geçilir, bir süre sonra tekrar
   *  crossfade ile videoya dönülür — sonsuz döngü (bkz. Ürünlerimiz sayfası,
   *  HeroShowcase bileşeni). */
  video?: string;
  /** Fotoğraf yerine tamamen özel bir görsel bileşen (ör. harita, grafik). Verilirse `image`/`images`/`video` yok sayılır. */
  visual?: ReactNode;
  /** Ana fotoğrafın ÜZERİNE, "screen" blend modu ile bindirilen ikinci bir
   *  görsel — koyu/siyah zeminli grafikleri (ör. ışıklı harita) şeffaf
   *  gibi göstermek için idealdir: siyah otomatik kaybolur, sadece parlak
   *  çizgi/noktalar fotoğrafın üstünde belirir. */
  overlayImage?: string;
  /** 'dark' (varsayılan): mevcut lacivert/fotoğraf üstü beyaz metin.
   *  'light': beyaz zemin, lacivert başlık — iki koyu bölümün art arda
   *  gelmesini istemediğimiz sayfalarda (örn. Hakkımızda) kullanılır. */
  theme?: 'dark' | 'light';
  /** Fotoğrafın arkasında/üzerinde süzülen un tozu efekti (bkz. Hero, Kalitemiz). */
  flourDust?: boolean;
}) {
  return (
    <section className={`page-hero ${theme === 'light' ? 'page-hero-light' : ''}`}>
      {visual ? (
        <div className="page-hero-visual">{visual}</div>
      ) : video && image ? (
        <HeroShowcase video={video} image={image} />
      ) : video ? (
        <video className="page-hero-video" src={video} autoPlay loop muted playsInline aria-hidden="true" />
      ) : images && images.length > 0 ? (
        <HeroSlideshow images={images} />
      ) : image ? (
        <Image src={image} alt="" fill priority sizes="100vw" />
      ) : null}
      {overlayImage ? (
        <div className="page-hero-map-overlay">
          <Image src={overlayImage} alt="" fill sizes="100vw" />
        </div>
      ) : null}
      <div className="page-hero-shade" />
      {flourDust ? <FlourDust /> : null}
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