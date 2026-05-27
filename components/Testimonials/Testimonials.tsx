'use client';
import styles from './styles.module.css';

interface Testimonial { quote: string; name: string; role: string; company: string; avatar?: string; }
interface TestimonialsProps {
  heading?: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ heading, testimonials = [] }: TestimonialsProps) {
  return (
    <section className={styles.root}>
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div className={styles.card} key={i}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              {t.avatar && <img className={styles.avatar} src={t.avatar} alt={t.name} />}
              <div>
                <strong className={styles.authorName}>{t.name}</strong>
                <span className={styles.authorMeta}>{t.role}, {t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
