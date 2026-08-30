import { ReactNode } from 'react';
import { Reveal } from './motion-primitives';

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        <Reveal>
          <p className="eyebrow light">
            <span /> {eyebrow}
          </p>
          <h1>{title}</h1>
          <p>{text}</p>
        </Reveal>
      </div>
    </section>
  );
}