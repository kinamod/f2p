import styles from './styles.module.css';

interface ExinityConnectHeroProps {
  breadcrumbLabel?: string;
  breadcrumbHref?: string;
  currentLabel?: string;
  heading?: string;
  posterUrl?: string;
  videoMp4Url?: string;
  videoWebmUrl?: string;
  enterHref?: string;
}

export default function ExinityConnectHero({
  breadcrumbLabel = 'BRANDS',
  breadcrumbHref = '/brand',
  currentLabel = 'EXINITY CONNECT',
  heading = 'Exinity Connect. Connecting brokers with exceptional liquidity',
  posterUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-poster-00001.jpg',
  videoMp4Url = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-transcode.mp4',
  videoWebmUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-transcode.webm',
  enterHref = '#section-2',
}: ExinityConnectHeroProps) {
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
        <video className={styles.heroVideo} autoPlay muted playsInline poster={posterUrl}>
          <source src={videoMp4Url} type="video/mp4" />
          <source src={videoWebmUrl} type="video/webm" />
        </video>
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
