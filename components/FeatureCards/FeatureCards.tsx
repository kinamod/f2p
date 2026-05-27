'use client';

import styles from './styles.module.css';

interface Card {
  icon?: string;
  title: string;
  body: string;
  linkLabel?: string;
  linkHref?: string;
}

interface FeatureCardsProps {
  heading?: string;
  cards?: Card[];
}

export default function FeatureCards({
  heading = 'What we offer',
  cards = [
    {
      icon: '🔧',
      title: 'Parts',
      body: 'A comprehensive range of Bosch automotive parts — from brake discs to wiper blades — all engineered to original equipment standards.',
      linkLabel: 'Browse parts',
      linkHref: '/gb/en/parts/',
    },
    {
      icon: '🖥️',
      title: 'Diagnostics',
      body: 'Industry-leading diagnostic tools and software to keep your workshop at the cutting edge of vehicle technology.',
      linkLabel: 'Explore diagnostics',
      linkHref: '/gb/en/diagnostics/',
    },
    {
      icon: '🎓',
      title: 'Training & Services',
      body: 'Technical training programmes, workshop concepts, and service solutions designed to grow your business and skills.',
      linkLabel: 'See services',
      linkHref: '/gb/en/services/',
    },
  ],
}: FeatureCardsProps) {
  return (
    <section className={styles.root}>
      {heading && <h2 className={styles.sectionHeading}>{heading}</h2>}
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            {card.icon && <span className={styles.cardIcon}>{card.icon}</span>}
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardBody}>{card.body}</p>
            {card.linkLabel && (
              <a href={card.linkHref} className={styles.cardLink}>{card.linkLabel}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
