import { Check } from 'lucide-react';
import { values } from '@/lib/data';
import { Reveal, RevealGroup, RevealItem } from './motion-primitives';

export function Together() {
  return (
    <section className="together section-padding">
      <div className="wheat-glow" />
      <div className="container together-grid">
        <Reveal direction="left">
          <div className="together-image">
            <img src="/unex1.jpeg" alt="Together We Grow buğday illüstrasyonu" />
          </div>
        </Reveal>

        <div className="together-copy">
          <Reveal direction="right">
            <p className="eyebrow light">
              <span /> SÖZÜMÜZ
            </p>
            <h2>
              Together
              <br />
              <em>We Grow</em>
            </h2>
          </Reveal>

          <RevealGroup className="value-list">
            {values.map((value, index) => (
              <RevealItem className="value-item" key={value}>
                <span>0{index + 1}</span>
                <Check size={16} />
                {value}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}