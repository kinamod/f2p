'use client';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface Slide { image: string; headline?: string; subtext?: string; ctaLabel?: string; ctaHref?: string; }
interface CarouselProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({ slides = [], autoPlay = false, interval = 4000 }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length < 2) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className={styles.root}>
      <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className={styles.slide} key={i}>
            <img className={styles.slideImage} src={slide.image} alt={slide.headline || `Slide ${i + 1}`} />
            {(slide.headline || slide.subtext) && (
              <div className={styles.slideCaption}>
                {slide.headline && <h2 className={styles.slideHeadline}>{slide.headline}</h2>}
                {slide.subtext && <p className={styles.slideSubtext}>{slide.subtext}</p>}
                {slide.ctaLabel && slide.ctaHref && (
                  <a className={styles.slideCta} href={slide.ctaHref}>{slide.ctaLabel}</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <>
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous">&#8249;</button>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next">&#8250;</button>
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
