'use client';

import styles from './styles.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: string;
  columns?: FooterColumn[];
  legalLinks?: FooterLink[];
  copyrightText?: string;
}

export default function Footer({
  logo = 'Bosch Aftermarket',
  columns = [
    {
      heading: 'Parts',
      links: [
        { label: 'Products Overview', href: '/gb/en/parts/products/overview/' },
        { label: 'Parts Catalogue', href: '/gb/en/parts/catalogue/parts-catalogue/' },
      ],
    },
    {
      heading: 'Diagnostics',
      links: [
        { label: 'Diagnostic Solution', href: '/gb/en/diagnostics/workshop-portfolio/diagnostic-solution/' },
        { label: 'ECU Diagnostic Tools', href: '/gb/en/diagnostics/ecu-diagnosis/ecu-diagnostic-tools/' },
        { label: 'Test Equipment', href: '/gb/en/diagnostics/test-equipment/air-conditioning-service/' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { label: 'Service Training', href: '/gb/en/services/training-solutions/service-training/' },
        { label: 'Bosch Car Service', href: '/gb/en/services/workshop-concepts/bosch-car-service/' },
        { label: 'extra Rewards', href: '/gb/en/services/programs/extra-rewards/' },
      ],
    },
    {
      heading: 'News',
      links: [
        { label: 'Read News', href: '/gb/en/news/latest-news-and-stories/read-news/' },
        { label: 'Tips & Technology', href: '/gb/en/news/tips-and-technology/get-tips/' },
        { label: 'Newsletter', href: '/gb/en/news/newsletter/sign-up/' },
        { label: 'Download Centre', href: '/gb/en/news/download-centre/browse-downloads/' },
      ],
    },
  ],
  legalLinks = [
    { label: 'Imprint', href: '/gb/en/imprint.html' },
    { label: 'Privacy Statement', href: '/gb/en/privacy-statement.html' },
    { label: 'Contact', href: '/gb/en/contact/' },
  ],
  copyrightText = `© ${new Date().getFullYear()} Robert Bosch Ltd. All rights reserved.`,
}: FooterProps) {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="14" viewBox="0 0 433 97" className={styles.brandLogo}>
              <polygon points="416.3 16.38 416.3 39.78 397 39.78 397 16.38 380.3 16.38 380.3 79.98 397 79.98 397 54.88 416.3 54.88 416.3 79.98 433 79.98 433 16.38 416.3 16.38" style={{ fill: '#ed0007', fillRule: 'evenodd' }} />
            </svg>
            <span className={styles.brandName}>{logo}</span>
          </div>
          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <h4 className={styles.columnHeading}>{col.heading}</h4>
                <ul className={styles.columnLinks}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.columnLink}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottomRow}>
          <span className={styles.copyright}>{copyrightText}</span>
          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.legalLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
