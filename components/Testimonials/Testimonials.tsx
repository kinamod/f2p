'use client';

import styles from './styles.module.css';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialsProps {
  heading?: string;
  testimonials?: Testimonial[];
}

export default function Testimonials({
  heading = 'What our partners say',
  testimonials = [
    {
      quote: "Bosch diagnostic tools have transformed our workshop efficiency. The ESI[tronic] software gives us confidence on every job, new or old.",
      name: 'James Hartley',
      role: 'Workshop Manager',
      company: 'Hartley Auto Services',
    },
    {
      quote: "The extra Rewards programme has made a real difference to our bottom line. Bosch parts quality speaks for itself — our customers trust the brand.",
      name: 'Sarah Connell',
      role: 'Parts Manager',
      company: 'Premier Motor Group',
    },
  ],
}: TestimonialsProps) {
  return (
    <section className={styles.root}>
      {heading && <h2 className={styles.sectionHeading}>{heading}</h2>}
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={styles.card}>
            <span className={styles.quoteMark}>&ldquo;</span>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.author}>
              {t.avatar && <img src={t.avatar} alt={t.name} className={styles.avatar} />}
              <div>
                <strong className={styles.authorName}>{t.name}</strong>
                <span className={styles.authorRole}>{t.role}, {t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
