'use client';
import { useState } from 'react';
import styles from './styles.module.css';

interface AnnouncementBarProps {
  message: string;
  linkLabel?: string;
  linkHref?: string;
  dismissible?: boolean;
}

export default function AnnouncementBar({ message, linkLabel, linkHref, dismissible = true }: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <span className={styles.message}>
          {message}
          {linkLabel && linkHref && (
            <a className={styles.link} href={linkHref}>{linkLabel}</a>
          )}
        </span>
        {dismissible && (
          <button className={styles.close} onClick={() => setVisible(false)} aria-label="Dismiss">×</button>
        )}
      </div>
    </div>
  );
}
