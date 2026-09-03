import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, PackageOpen } from 'lucide-react';
import { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/urunlerimiz/${product.slug}`} className="product-card">
      <div className={`product-visual ${product.image ? 'has-image' : ''}`}>
        {product.image ? (
          <div className="img-wrap">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 900px) 45vw, 260px"
            />
          </div>
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