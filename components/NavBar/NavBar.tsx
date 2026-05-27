'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface NavLink {
  label: string;
  href: string;
}

interface NavBarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  subBrand?: string;
}

export default function NavBar({
  links = [
    { label: 'Parts', href: '/gb/en/parts/' },
    { label: 'Diagnostics', href: '/gb/en/diagnostics/' },
    { label: 'Services', href: '/gb/en/services/' },
    { label: 'News', href: '/gb/en/news/' },
  ],
  ctaLabel = 'Contact',
  ctaHref = '/gb/en/contact/',
  subBrand = 'Mobility Aftermarket United Kingdom and Ireland',
}: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.root}>
      <div className={styles.topBar}>
        <a href="/gb/en/" className={styles.logoLink} aria-label="Bosch Aftermarket Home">
          <span className={styles.logoWordmark}>Bosch</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.label} className={styles.navItem}>
                <a href={link.href} className={styles.navLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={ctaHref} className={styles.contactLink} aria-label={ctaLabel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
            </svg>
          </a>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
        </div>
      </div>

      <div className={styles.subBrandBar}>
        <span className={styles.subBrandText}>{subBrand}</span>
      </div>

      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile Navigation">
          <ul className={styles.mobileNavList}>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.mobileNavLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
