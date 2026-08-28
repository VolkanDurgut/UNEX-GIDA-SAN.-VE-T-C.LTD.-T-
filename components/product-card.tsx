import Link from 'next/link';
import { ArrowUpRight, PackageOpen } from 'lucide-react';
import { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/urunlerimiz/${product.slug}`} className="product-card">
      <div className={`product-visual ${product.image ? 'has-image' : ''}`}>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="placeholder">
            <PackageOpen size={25} />
            <span>
              Görsel
              <br />
              yakında
            </span>
          </div>
        )}
        <span className="product-number">01 / 06</span>
      </div>
      <div className="product-card-info">
        <div>
          <p className="product-use">{product.use}</p>
          <h3>{product.name}</h3>
        </div>
        <ArrowUpRight size={19} />
      </div>
    </Link>
  );
}