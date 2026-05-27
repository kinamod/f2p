'use client';
import styles from './styles.module.css';

interface FooterLink { label: string; href: string; external?: boolean; }
interface FooterProps {
  tagline: string;
  brandLinks: FooterLink[];
  legalLinks: FooterLink[];
  copyrightText: string;
  showBackToTop?: boolean;
}

export default function Footer({ tagline, brandLinks = [], legalLinks = [], copyrightText, showBackToTop = true }: FooterProps) {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.root} aria-label="Footer main">
      <div className={styles.inner}>

        <div className={styles.topSection}>
          <div className={styles.tagline}>{tagline}</div>
          <ul className={styles.brandLinks}>
            {brandLinks.map((link) => (
              <li className={styles.brandLinkItem} key={link.label}>
                <a
                  href={link.href}
                  className={styles.brandLink}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                  {link.external && <span className={styles.externalIcon} aria-hidden="true">↗</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomSection}>
          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li className={styles.legalLinkItem} key={link.label}>
                <a
                  href={link.href}
                  className={styles.legalLink}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.copyright}>{copyrightText}</div>
          {showBackToTop && (
            <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top" title="back to top">
              ↑
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}
