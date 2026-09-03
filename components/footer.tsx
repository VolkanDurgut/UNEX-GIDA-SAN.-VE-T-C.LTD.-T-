import Link from 'next/link';
import Image from 'next/image';
import { Clock3 } from 'lucide-react';
import { products } from '@/lib/data';
import { Reveal } from './motion-primitives';
import { FlourDust } from './flour-dust';

export function Footer() {
  return (
    <footer className="footer">
      <FlourDust />
      <div className="container">
        <Reveal>
          <div className="footer-top">
            <div className="footer-about">
              <Image src="/logo.png" alt="Unex Gıda" width={74} height={74} />
              <p>
                Başarımızın anahtarı ve her zaman korumaya çalıştığımız değer, ortaklarımızla oluşturduğumuz
                güvendir. Hem tedarikçi hem de alıcı tarafta yer alan bir firma olarak emtia piyasalarında
                zamanlamanın ve iş pozisyonları almanın önemini çok iyi biliyoruz.
              </p>
            </div>
            <div className="footer-column">
              <h4>KURUMSAL</h4>
              <Link href="/kalitemiz">Kalitemiz</Link>
              <Link href="/katalog">Katalog</Link>
            </div>
            <div className="footer-column">
              <h4>ÜRÜN GRUPLARI</h4>
              {products.map((product) => (
                <Link key={product.slug} href={`/urunlerimiz/${product.slug}`}>
                  {product.name}
                </Link>
              ))}
            </div>
            <div className="footer-column">
              <h4>ÇALIŞMA SAATLERİ</h4>
              <p>
                <Clock3 size={15} /> Pazartesi–Cuma
                <br />
                08:30–18:00
              </p>
              <p>
                Cumartesi 08:30–15:00
                <br />
                Pazar KAPALI
              </p>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>Copyright © 2025 Web sitemiz Tasdix ile tasdiklenmiştir.</span>
          <span>Herhangi bir şekilde kopyalanması, çoğaltılması ve dağıtılması halinde yasal haklarımız işletilecektir.</span>
          <span className="footer-mark">UNEX / GROWING TOGETHER</span>
        </div>
      </div>
    </footer>
  );
}