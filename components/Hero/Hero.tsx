'use client';

import styles from './styles.module.css';

interface HeroProps {
  headline?: string;
  subtext?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  backgroundImage?: string;
  textPosition?: 'top-left' | 'bottom-left' | 'center';
  overlayTheme?: 'white' | 'grey' | 'dark';
}

export default function Hero({
  headline = 'Bosch. The automotive influencers',
  subtext = "Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are.",
  primaryCtaLabel = 'Read the article',
  primaryCtaHref = '/gb/en/news/latest-news-and-stories/bosch-automotive-influencers/',
  backgroundImage = 'https://www.boschaftermarket.com/xrm/media/images/services/news_3/25_5_influencer/campaign_image_robert_bosch_influencer_post_slider_res_992x558.webp',
  textPosition = 'top-left',
  overlayTheme = 'white',
}: HeroProps) {
  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`${styles.textbox} ${styles[textPosition]} ${styles[overlayTheme]}`}>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subtext}>{subtext}</p>
        <a href={primaryCtaHref} className={styles.cta}>
          <span>{primaryCtaLabel}</span>
        </a>
      </div>
    </section>
  );
}
