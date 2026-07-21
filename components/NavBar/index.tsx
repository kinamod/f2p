'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface NavSubLink {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface NavLink {
  label: string;
  href: string;
  subLinks?: NavSubLink[];
  isLast?: boolean;
}

interface NavBarProps {
  logoUrl?: string;
  logoAlt?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  {
    label: 'Our brands',
    href: '/brand',
    subLinks: [
      { label: 'FXTM', href: '/fxtm' },
      { label: 'Nemo', href: '/nemo', isCurrent: true },
      { label: 'Pulse', href: '/pulse' },
      { label: 'PiP World', href: '/pip-world' },
      { label: 'Exinity Connect', href: '/exinity-connect' },
    ],
  },
  {
    label: 'About us',
    href: '/about-us',
    subLinks: [
      { label: 'Who we are', href: '/about-us#who-we-are' },
      { label: 'Where we are', href: '/about-us#where-we-are' },
      { label: 'Work with us', href: '/about-us#work-with-us' },
    ],
  },
  {
    label: 'Our commitments',
    href: '/our-commitments',
    subLinks: [
      { label: 'Governance', href: '/our-commitments#governance' },
      { label: 'Sustainable business', href: '/our-commitments#sustainable-business' },
      { label: 'Charitable partners', href: '/our-commitments#charitable-partners' },
    ],
  },
  { label: 'Partner with us', href: '/partner-with-us', isLast: true },
];

export default function NavBar({
  logoUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67858a1e39973dbac37f6e02_exinity.svg',
  logoAlt = 'Exinity',
  instagramUrl = 'https://www.instagram.com/exinity/',
  linkedinUrl = 'https://www.linkedin.com/company/exinity/',
  links = defaultLinks,
}: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.sideNav}>
      <div className={styles.navWrapper}>
        <a href="/" className={styles.logoWrapper}>
          <img src={logoUrl} loading="lazy" alt={logoAlt} className={styles.logoImage} />
        </a>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.hamburgerButton}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.hamburgerButtonMobile}
        >
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
          <div className={styles.burgerLine} />
        </button>
        <div className={`${styles.menuOverlay} ${isOpen ? styles.menuOverlayOpen : ''}`}>
          <div className={styles.menuContent}>
            {links.map((link) => (
              <div key={link.label}>
                <a href={link.href} className={link.isLast ? styles.menuLinkLast : styles.menuLink}>
                  {link.label}
                </a>
                {link.subLinks && (
                  <div className={styles.menuSubWrapper}>
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className={sub.isCurrent ? styles.menuSubLinkActive : styles.menuSubLink}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={styles.socialLinks}>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.socialIconInstagram}`} aria-label="Instagram" />
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.socialIconLinkedin}`} aria-label="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
