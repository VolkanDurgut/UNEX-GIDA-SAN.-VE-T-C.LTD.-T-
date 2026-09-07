import { ReactNode } from 'react';
import Image from 'next/image';
import { Reveal } from './motion-primitives';
import { FlourDust } from './flour-dust';
import { HeroSlideshow } from './hero-slideshow';
import { HeroForegroundReveal } from './hero-foreground-reveal';

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  images,
  imagesInterval,
  visual,
  overlayImage,
  foreground,
  foregroundDelay = 0,
  theme = 'dark',
  flourDust = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  /** Birden fazla fotoğraf verilirse otomatik crossfade slideshow'a geçilir (`image` yok sayılır). */
  images?: string[];
  /** Slaytlar arası bekleme süresi (ms). Belirtilmezse HeroSlideshow'un
   *  kendi varsayılanı (5500ms) kullanılır — sayfaya özel bir ritim
   *  gerekiyorsa (bkz. Ürünlerimiz: 5000ms) buradan geçilir. */
  imagesInterval?: number;
  /** Fotoğraf yerine tamamen özel bir görsel bileşen (ör. harita, grafik). Verilirse `image`/`images` yok sayılır. */
  visual?: ReactNode;
  /** Ana fotoğrafın ÜZERİNE, "screen" blend modu ile bindirilen ikinci bir
   *  görsel — koyu/siyah zeminli grafikleri (ör. ışıklı harita) şeffaf
   *  gibi göstermek için idealdir: siyah otomatik kaybolur, sadece parlak
   *  çizgi/noktalar fotoğrafın üstünde belirir. */
  overlayImage?: string;
  /** Karartma katmanının (page-hero-shade) ÜSTÜNDE, sağ-alt köşede duran,
   *  kararmayan bir ön plan öğesi — ör. ürün paketleri kompozisyonu. */
  foreground?: ReactNode;
  /** foreground'ın kaç saniye sonra belirmeye başlayacağı (varsayılan 0 —
   *  hemen görünür). İlk slayt kendi başına zaten dolu bir kompozisyonsa
   *  (bkz. Ürünlerimiz: marka görseli) foreground'ı slayt geçişiyle
   *  eşzamanlı belirtmek için kullanılır — çakışıp kalabalıklaşmasın diye. */
  foregroundDelay?: number;
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
      ) : images && images.length > 0 ? (
        <HeroSlideshow images={images} interval={imagesInterval} />
      ) : image ? (
        <Image src={image} alt="" fill priority sizes="100vw" />
      ) : null}
      {overlayImage ? (
        <div className="page-hero-map-overlay">
          <Image src={overlayImage} alt="" fill sizes="100vw" />
        </div>
      ) : null}
      <div className="page-hero-shade" />
      {foreground ? <HeroForegroundReveal delay={foregroundDelay}>{foreground}</HeroForegroundReveal> : null}
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