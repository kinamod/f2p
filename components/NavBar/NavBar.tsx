'use client';
import { useState } from 'react';
import styles from './styles.module.css';

interface NavLink { label: string; href: string; }
interface NavBarProps {
  logo: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

export default function NavBar({ logo, links, ctaLabel, ctaHref }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.root}>
      <div className={styles.navbar}>
        <a className={styles.logo} href="#">{logo}</a>
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.label}><a className={styles.navLink} href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a className={styles.cta} href={ctaHref}>{ctaLabel}</a>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
