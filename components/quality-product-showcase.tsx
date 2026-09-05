import Image from 'next/image';
import { products } from '@/lib/data';
import { RevealGroup, RevealItem } from './motion-primitives';

/** Paket ağırlıkları veri modelinde yok (bagların üzerinde basılı) —
 *  gerçek kataloğa göre burada eşleniyor. */
const WEIGHTS: Record<string, string> = {
  'biscuit-flour': '25kg',
  'multi-purpose-flour': '25kg',
  'baker-flour': '50kg',
  'baker-plus-flour': '50kg',
  'super-baker-flour': '50kg',
  'noodle-and-pasta-flour': '25kg',
};

const SLUGS = [
  'baker-plus-flour',
  'biscuit-flour',
  'super-baker-flour',
  'baker-flour',
  'multi-purpose-flour',
  'noodle-and-pasta-flour',
];

/**
 * "İşinizi ileri taşırız" bölümü için: 6 gerçek ürünümüz, Türk bayrağı
 * rozetli, tek düzenli bir 2x3 ızgarada. Kullanıcı bölüme scroll ettiğinde
 * kartlar sırayla (staggered) belirir — sitenin geri kalanında zaten
 * kanıtlanmış RevealGroup/RevealItem deseni, yeni/riskli bir animasyon
 * icat etmek yerine.
 */
export function QualityProductShowcase() {
  return (
    <RevealGroup className="quality-product-grid">
      {SLUGS.map((slug) => {
        const product = products.find((p) => p.slug === slug);
        if (!product || !product.image) return null;
        return (
          <RevealItem key={slug}>
            <div className="quality-product-card">
              <span className="quality-product-flag" aria-hidden="true">
                🇹🇷
              </span>
              <Image src={product.image} alt={product.name} width={92} height={120} />
              <div className="quality-product-shadow" aria-hidden="true" />
              <p>
                {product.name}
                <br />
                <span>{WEIGHTS[slug]}</span>
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
