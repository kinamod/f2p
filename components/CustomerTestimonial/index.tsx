import styles from './styles.module.css';

interface CustomerTestimonialProps {
  customerName?: string;
  quoteLines?: string[];
  location?: string;
  posterUrl?: string;
  videoMp4Url?: string;
  videoWebmUrl?: string;
}

export default function CustomerTestimonial({
  customerName = 'Amara Jahani',
  quoteLines = ['“Picking stocks used to be a barren reef.', 'With Nemo it’s a coral garden”'],
  location = 'AMARA JAHANI, SHARJAH, UAE',
  posterUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-poster-00001.jpg',
  videoMp4Url = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-transcode.mp4',
  videoWebmUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-transcode.webm',
}: CustomerTestimonialProps) {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.row}>
        <div className={styles.contentColumn}>
          <h2 className={styles.heading}>
            Meet Nemo customer <br />
            <span className={styles.customerName}>{customerName}</span>
          </h2>
          {quoteLines.map((line) => (
            <h3 key={line} className={styles.quoteLine}>
              {line}
            </h3>
          ))}
          <p className={styles.quoteName}>{location}</p>
        </div>
        <div className={styles.mediaColumn}>
          <video
            className={styles.testimonialVideo}
            autoPlay
            loop
            muted
            playsInline
            poster={posterUrl}
          >
            <source src={videoMp4Url} type="video/mp4" />
            <source src={videoWebmUrl} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
