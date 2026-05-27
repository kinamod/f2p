'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';

interface Slide {
  image: string;
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  textPosition?: 'top-left' | 'bottom-left' | 'center';
  overlayTheme?: 'white' | 'grey' | 'dark';
}

interface CarouselProps {
  slides?: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel({
  slides = [
    {
      image: 'https://www.boschaftermarket.com/xrm/media/images/services/news_3/25_5_influencer/campaign_image_robert_bosch_influencer_post_slider_res_992x558.webp',
      headline: 'Bosch. The automotive influencers',
      subtext: "Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are.",
      ctaLabel: 'Read the article',
      ctaHref: '/gb/en/news/latest-news-and-stories/bosch-automotive-influencers/',
      textPosition: 'top-left',
      overlayTheme: 'white',
    },
    {
      image: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/gb/w2b_banner_en_res_992x558.webp',
      headline: 'Need wiper blades for your car?',
      subtext: 'Enter your car details, find the right part and use our Where-to-Buy service to order compatible Bosch wiper blades directly from our partners\' websites.',
      ctaLabel: 'Find your wiper blades now',
      ctaHref: '/gb/en/parts/',
      textPosition: 'bottom-left',
      overlayTheme: 'grey',
    },
    {
      image: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/de/news_downloads/23_2_bosch_brakes_1/born_safe_bremsscheibe_res_992x558.webp',
      headline: 'Born safe. Bosch Brakes.',
      subtext: 'Discover the full range of Bosch brake components — engineered for reliability and safety at every stop.',
      ctaLabel: 'Explore brakes',
      ctaHref: '/gb/en/parts/products/overview/',
      textPosition: 'bottom-left',
      overlayTheme: 'white',
    },
  ],
  autoPlay = true,
  interval = 5000,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  const slide = slides[current];

  return (
    <section className={styles.root} role="region" aria-label="Image slider">
      <div
        className={styles.slide}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className={`${styles.textbox} ${styles[slide.textPosition ?? 'top-left']} ${styles[slide.overlayTheme ?? 'white']}`}>
          <h2 className={styles.headline}>{slide.headline}</h2>
          <p className={styles.subtext}>{slide.subtext}</p>
          <a href={slide.ctaHref} className={styles.cta}><span>{slide.ctaLabel}</span></a>
        </div>
      </div>

      <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prev} aria-label="Previous slide">&#8249;</button>
      <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={next} aria-label="Next slide">&#8250;</button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
