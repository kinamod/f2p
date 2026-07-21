'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface HighlightSlide {
  posterUrl: string;
  videoMp4Url: string;
  videoWebmUrl: string;
  primaryText: string;
  secondaryText: string;
}

interface ProductHighlightProps {
  slides?: HighlightSlide[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultSlides: HighlightSlide[] = [
  {
    posterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-poster-00001.jpg',
    videoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-transcode.mp4',
    videoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-transcode.webm',
    primaryText: 'AI-powered Nemo selects the hottest stocks from 8000 daily',
    secondaryText: 'and brings them to beautiful, tradeable life.',
  },
  {
    posterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-poster-00001.jpg',
    videoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-transcode.mp4',
    videoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-transcode.webm',
    primaryText: 'Nemo does all this with simplicity and style.',
    secondaryText: 'And delivers a new generation of investors to us.',
  },
];

export default function ProductHighlight({
  slides = defaultSlides,
  ctaLabel = 'TAKE ME TO NEMO',
  ctaHref = 'https://nemo.money/',
}: ProductHighlightProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <section className={styles.highlightSection}>
      <a href={ctaHref} target="_blank" rel="noreferrer" className={styles.stickyCta}>
        {ctaLabel}
      </a>
      <div className={styles.row}>
        <div className={styles.mediaColumn}>
          <video
            key={activeSlide.videoMp4Url}
            className={styles.highlightVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={activeSlide.posterUrl}
          >
            <source src={activeSlide.videoMp4Url} type="video/mp4" />
            <source src={activeSlide.videoWebmUrl} type="video/webm" />
          </video>
        </div>
        <div className={styles.contentColumn}>
          <h2 className={styles.primaryText}>{activeSlide.primaryText}</h2>
          <h3 className={styles.secondaryText}>{activeSlide.secondaryText}</h3>
          <div className={styles.dots}>
            {slides.map((slide, index) => (
              <button
                key={slide.videoMp4Url}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
