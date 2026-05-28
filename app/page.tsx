import '@/builder-registry';
import styles from './showcase.module.css';

export default function ShowcasePage() {
  return (
    <main className={styles.showcaseMain}>
      <div className={styles.emptyState}>
        <p className={styles.emptyStateText}>
          No components yet — ask Fusion to clone a site.
        </p>
      </div>
    </main>
  );
}
