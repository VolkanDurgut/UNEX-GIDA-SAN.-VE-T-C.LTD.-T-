import Image from 'next/image';
import { products } from '@/lib/data';

/**
 * Ürünlerimiz hero'su — kataloğun "Product Portfolio" sayfasındaki gibi
 * 6 ürünün TAMAMI, her birinin üzerinde kompakt bir "Protein %" rozeti.
 *
 * Not: Tam 4'lü spec kutusunu (Protein/Gluten/Kül/Nem) 6 ürün için yan
 * yana denedik — sığmıyor, dağınık ve kısmen kadraj dışı kalıyordu. Onun
 * yerine tek satırlık kompakt rozete geçildi; DEĞER yine lib/data.ts'teki
 * gerçek "Protein" spec'inden okunuyor, elle yazılmıyor.
 */
export function ProductHeroBags() {
  return (
    <div className="hero-bags">
      {products.map((product) => {
        if (!product.image) return null;
        const protein = product.specs.find(([label]) => label === 'Protein')?.[1];
        return (
          <div className="hero-bags-item" key={product.slug}>
            {protein ? <div className="hero-bag-chip">Protein {protein}</div> : null}
            <div className="hero-bags-item-visual">
              <Image src={product.image} alt={product.name} fill sizes="150px" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

