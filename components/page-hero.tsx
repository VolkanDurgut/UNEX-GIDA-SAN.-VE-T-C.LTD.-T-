import { ReactNode } from 'react';
import Image from 'next/image';
import { Reveal } from './motion-primitives';
import { FlourDust } from './flour-dust';
import { HeroShowcase } from './hero-showcase';

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  video,
  overlayImage,
  overlayBlend = 'screen',
  badgesImage,
  theme = 'dark',
  flourDust = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  image?: string;
  /** Sabit fotoğraf yerine otomatik oynatılan, sessiz bir arka plan
   *  videosu. Sadece `video` verilirse döngüsel (loop) oynar. `video` İLE
   *  BİRLİKTE `image` de verilirse "vitrin" moduna geçilir: video bir kez
   *  oynar, bitince crossfade ile `image`'a geçilir, bir süre sonra tekrar
   *  crossfade ile videoya dönülür — sonsuz döngü (bkz. Ürünlerimiz sayfası,
   *  HeroShowcase bileşeni). */
  video?: string;
  /** Ana fotoğrafın ÜZERİNE, "screen" blend modu ile bindirilen ikinci bir
   *  görsel — koyu/siyah zeminli grafikleri (ör. ışıklı harita) şeffaf
   *  gibi göstermek için idealdir: siyah otomatik kaybolur, sadece parlak
   *  çizgi/noktalar fotoğrafın üstünde belirir. */
  overlayImage?: string;
  /** 'screen' (varsayılan): koyu/siyah zeminli fotoğraflar için — siyah
   *  otomatik kaybolur (bkz. Kalitemiz). 'normal': zaten şeffaf arka
   *  planlı bir PNG kullanıyorsanız (siyah kısmı elle şeffaflaştırılmış)
   *  bunu seçin — açık zeminlerde çok daha net/canlı görünür (bkz.
   *  Hakkımızda). */
  overlayBlend?: 'screen' | 'normal';
  /** Başlık bloğunun EN ÜSTÜNE, eyebrow satırının hemen üzerine eklenen
   *  şeffaf arka planlı bir rozet/sertifika şeridi (ör. ISO/Halal
   *  rozetleri) — metinle birlikte aynı akışta, aynı giriş animasyonuyla
   *  belirir. Gerçek, hazır bir görsel olmalı — burada asla yapay zeka
   *  ile üretilmiş/düzenlenmiş bir görsel kullanılmamalı (metin bozulma
   *  riski). */
  badgesImage?: string;
  /** 'dark' (varsayılan): mevcut lacivert/fotoğraf üstü beyaz metin.
   *  'light': beyaz zemin, lacivert başlık — iki koyu bölümün art arda
   *  gelmesini istemediğimiz sayfalarda (örn. Hakkımızda) kullanılır. */
  theme?: 'dark' | 'light';
  /** Fotoğrafın arkasında/üzerinde süzülen un tozu efekti (bkz. Hero, Kalitemiz). */
  flourDust?: boolean;
}) {
  return (
    <section className={`page-hero ${theme === 'light' ? 'page-hero-light' : ''}`}>
      {video && image ? (
        <HeroShowcase video={video} image={image} />
      ) : video ? (
        <video className="page-hero-video" src={video} autoPlay loop muted playsInline aria-hidden="true" />
      ) : image ? (
        <Image src={image} alt="" fill priority sizes="100vw" />
      ) : null}
      {overlayImage ? (
        <div className={overlayBlend === 'normal' ? 'page-hero-map-overlay page-hero-map-overlay-normal' : 'page-hero-map-overlay'}>
          <Image src={overlayImage} alt="" fill sizes="100vw" />
        </div>
      ) : null}
      <div className="page-hero-shade" />
      {flourDust ? <FlourDust /> : null}
      <div className="container page-hero-content">
        <Reveal>
          {badgesImage ? (
            <div className="page-hero-badges">
              <Image src={badgesImage} alt="ISO ve Helal sertifikaları" width={1151} height={180} />
            </div>
          ) : null}
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