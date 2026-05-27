'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface AnnouncementBarProps {
  message?: string;
  linkLabel?: string;
  linkHref?: string;
  dismissible?: boolean;
}

export default function AnnouncementBar({
  message = 'New: Bosch Automotive Skills Bootcamp — register now',
  linkLabel = 'Learn more',
  linkHref = '/gb/en/services/training-solutions/automotive-skills-bootcamp/',
  dismissible = true,
}: AnnouncementBarProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className={styles.root}>
      <div className={styles.bar}>
        <span className={styles.message}>
          {message}
          {linkLabel && (
            <a href={linkHref} className={styles.link}>{linkLabel}</a>
          )}
        </span>
        {dismissible && (
          <button className={styles.closeBtn} onClick={() => setVisible(false)} aria-label="Dismiss">
            ×
          </button>
        )}
      </div>
    </div>
  );
}
