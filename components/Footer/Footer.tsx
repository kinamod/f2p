'use client';

import styles from './styles.module.css';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterProps {
  tagline?: string;
  brandLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  copyrightText?: string;
  showBackToTop?: boolean;
}

export default function Footer({
  tagline = 'Technology for life',
  brandLinks = [
    { label: 'Contact', href: 'https://www.boschaftermarket.com/gb/en/contact/', external: false },
    { label: 'Careers at Bosch', href: 'https://www.bosch.com/careers/', external: true },
    { label: 'Bosch Media Service', href: 'https://www.bosch-presse.de/pressportal/de/en/news/', external: true },
    { label: 'Bosch Home Appliances', href: 'https://www.bosch-home.co.uk/', external: true },
    { label: 'Bosch Home & Garden', href: 'https://www.bosch-diy.com/gb/en', external: true },
    { label: 'Worcester Bosch', href: 'https://www.worcester-bosch.co.uk/how-to-buy-your-boiler', external: true },
  ],
  legalLinks = [
    { label: 'Imprint', href: 'https://www.boschaftermarket.com/gb/en/imprint.html', external: false },
    { label: 'Legal notice', href: 'https://www.boschaftermarket.com/gb/en/legal-notice.html', external: false },
    { label: 'Privacy statement', href: 'https://www.boschaftermarket.com/gb/en/privacy-statement.html', external: false },
    { label: 'Apprentice Programme Privacy Notice', href: 'https://www.boschaftermarket.com/gb/en/apprenticeship-privacy-notice.html', external: false },
    { label: 'Goods and Services - Terms of Supply', href: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/gb/bosch_terms_for_supply_of_goods_and_service.pdf', external: true },
    { label: 'Accessible web content', href: 'https://www.boschaftermarket.com/gb/en/accessibility-statement.html', external: false },
    { label: 'Privacy settings', href: '#', external: false },
  ],
  copyrightText = '© 2018 - 2026 Robert Bosch Ltd, all rights reserved',
  showBackToTop = true,
}: FooterProps) {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer className={styles.root} aria-label="Footer main">
      <div className={styles.inner}>

        <div className={styles.topSection}>
          <div className={styles.tagline}>{tagline}</div>
          <ul className={styles.brandLinks}>
            {brandLinks.map((link) => (
              <li key={link.label} className={styles.brandLinkItem}>
                <a
                  href={link.href}
                  className={styles.brandLink}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  aria-label={link.external ? `${link.label} opens external site` : link.label}
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
              <li key={link.label} className={styles.legalLinkItem}>
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
            <button
              type="button"
              title="back to top"
              aria-label="back to top"
              className={styles.backToTop}
              onClick={scrollToTop}
            >
              ↑
            </button>
          )}
        </div>

      </div>
    </footer>
  );
}
