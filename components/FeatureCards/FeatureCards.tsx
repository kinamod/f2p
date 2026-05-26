'use client';
import styles from './styles.module.css';

interface Card { icon?: string; title: string; body: string; }
interface FeatureCardsProps {
  heading?: string;
  cards: Card[];
}

export default function FeatureCards({ heading, cards }: FeatureCardsProps) {
  return (
    <section className={styles.root}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.grid}>
        {cards.map((card, i) => (
          <div className={styles.card} key={i}>
            {card.icon && <span className={styles.icon}>{card.icon}</span>}
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardBody}>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
