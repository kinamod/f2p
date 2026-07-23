import styles from './styles.module.css';

interface PipWorldHeroProps {
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  currentLabel?: string;
  heading?: string;
  posterUrl?: string;
  videoMp4Url?: string;
  videoWebmUrl?: string;
  enterHref?: string;
}

export default function PipWorldHero({
  breadcrumbLabel = 'BRANDS',
  breadcrumbHref = '/brand',
  currentLabel = 'PIP WORLD',
  heading = 'How a virtual world is building real financial skill',
  posterUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-poster-00001.jpg',
  videoMp4Url = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-transcode.mp4',
  videoWebmUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-transcode.webm',
  enterHref = '#section-2',
}: PipWorldHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroWrapper}>
        <div className={styles.breadcrumb}>
          <a href={breadcrumbHref} className={styles.breadcrumbLink}>
            {breadcrumbLabel}
          </a>
          <div className={styles.breadcrumbDivider}>l</div>
          <div className={styles.breadcrumbLink}>{currentLabel}</div>
        </div>
        <div className={styles.heroLogoWrap}>
          <video className={styles.heroVideo} autoPlay muted playsInline poster={posterUrl}>
            <source src={videoMp4Url} type="video/mp4" />
            <source src={videoWebmUrl} type="video/webm" />
          </video>
        </div>
        <div className={styles.coverPage}>
          <div className={styles.coverContent}>
            <div className={styles.headingContainer}>
              <h1 className={styles.heading}>{heading}</h1>
            </div>
            <div className={styles.controlsContainer}>
              <a href={enterHref} className={styles.enterButton}>
                ENTER
              </a>
              <a href="#" className={styles.scrollButton}>
                SCROLL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
