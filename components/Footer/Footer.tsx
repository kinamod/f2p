'use client';
import styles from './styles.module.css';

interface FooterLink { label: string; href: string; }
interface FooterColumn { heading: string; links: FooterLink[]; }
interface SocialLink { platform: string; href: string; }
interface FooterProps {
  logo: string;
  columns: FooterColumn[];
  socialLinks?: SocialLink[];
  copyrightText: string;
}

export default function Footer({ logo, columns, socialLinks, copyrightText }: FooterProps) {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>{logo}</span>
        </div>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div className={styles.column} key={col.heading}>
              <h4 className={styles.colHeading}>{col.heading}</h4>
              <ul className={styles.colLinks}>
                {col.links.map((l) => (
                  <li key={l.label}><a className={styles.colLink} href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {socialLinks && socialLinks.length > 0 && (
        <div className={styles.social}>
          {socialLinks.map((s) => (
            <a className={styles.socialLink} key={s.platform} href={s.href}>{s.platform}</a>
          ))}
        </div>
      )}
      <div className={styles.copyright}>{copyrightText}</div>
    </footer>
  );
}
