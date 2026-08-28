import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Hero } from '@/components/hero';
import { AboutSummary } from '@/components/about-summary';
import { Together } from '@/components/together';
import { ProductPreview } from '@/components/product-preview';
import { Reveal } from '@/components/motion-primitives';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSummary />
      <Together />
      <ProductPreview />

      <section className="statement-band">
        <Reveal className="container statement-inner">
          <Sparkles size={25} />
          <h2>
            Every recipe has a beginning.
            <br />
            <em>Make yours matter.</em>
          </h2>
          <Link href="/iletisim" className="button button-outline">
            Bize Ulaşın <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}