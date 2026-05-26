'use client';
import styles from './styles.module.css';

interface HeroProps {
  headline: string;
  subtext: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundImage?: string;
}

export default function Hero({ headline, subtext, primaryCtaLabel, primaryCtaHref, secondaryCtaLabel, secondaryCtaHref, backgroundImage }: HeroProps) {
  return (
    <section
      className={styles.root}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && <div className={styles.overlay} />}
      <div className={styles.content}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtext}>{subtext}</p>
        <div className={styles.actions}>
          <a className={styles.primaryCta} href={primaryCtaHref}>{primaryCtaLabel}</a>
          {secondaryCtaLabel && secondaryCtaHref && (
            <a className={styles.secondaryCta} href={secondaryCtaHref}>{secondaryCtaLabel}</a>
          )}
        </div>
      </div>
    </section>
  );
}
