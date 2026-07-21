import styles from './styles.module.css';

interface FooterProps {
  logoUrl?: string;
  logoAlt?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  legalParagraphs?: string[];
  copyrightText?: string;
  privacyHref?: string;
  topHref?: string;
}

const defaultLegalParagraphs = [
  'Exinity Capital East Africa Ltd (www.forextime.com) with registration number PVT-ZQU6JE7 and registration address at West End Towers, Waiyaki Way, 6th Floor , P.O. Box 1896-00606, Nairobi, Republic of Kenya is regulated by the Capital Markets Authority of the Republic of Kenya with a Non-Dealing Online Foreign Exchange Broker with license number 135.',
  'Exinity Limited (www.forextime.com) with registration number C119470 C1/GBL and registration address at 5th Floor, NEX Tower, Rue du Savoir, Cybercity, 72201 Ebene, Republic of Mauritius is regulated by the Financial Services Commission of the Republic of Mauritius with an Investment Dealer License with license number C113012295, licensed by the Financial Sector Conduct Authority (FSCA) of South Africa, with FSP No. 50320 and is a licensed Over the Counter Derivative Provider.',
  'Exinity ME Limited (https://nemo.money) with registration number 000004692 and registration address at 16-104, 16 Floor, Al Khatem Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE is authorised and regulated by the Financial Services Regulatory Authority (FSRA) of Abu Dhabi Global Market with a Category 3A Firm license number 200015.',
  'Exinity Global Financial Services L.L.C. is a limited liability company duly incorporated and operating in the United Arab Emirates. The company is regulated and supervised by the Capital Market Authority of the United Arab Emirates (“CMA”) and holds License No. 20200000270, issued for Category 5 activities (Introduction and Promotion). Its registered office is located at Office 614, The Binary Tower by Omniyat, 32 Marasi Drive Street, Business Bay, Dubai, United Arab Emirates.',
];

export default function Footer({
  logoUrl = 'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67af56b9a51e71fcbcb2480d_exinity-logo.svg',
  logoAlt = 'Exinity',
  instagramUrl = 'https://www.instagram.com/exinity/',
  linkedinUrl = 'https://www.linkedin.com/company/exinity/',
  legalParagraphs = defaultLegalParagraphs,
  copyrightText = '© 2026 Exinity',
  privacyHref = '/policies',
  topHref = '#section-1',
}: FooterProps) {
  return (
    <section className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.topBar}>
          <img src={logoUrl} loading="lazy" alt={logoAlt} className={styles.footerLogo} />
          <div className={styles.socialLinks}>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.socialIconInstagram}`} aria-label="Instagram" />
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className={`${styles.socialIcon} ${styles.socialIconLinkedin}`} aria-label="LinkedIn" />
          </div>
        </div>
        <div className={styles.terms}>
          {legalParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.links}>
            <div>{copyrightText}</div>
            <div>l</div>
            <div>
              <a href={privacyHref} className={styles.footerLink}>
                Privacy &amp; Cookies policy
              </a>
            </div>
          </div>
          <a href={topHref} className={styles.topButton}>
            TOP
          </a>
        </div>
      </div>
    </section>
  );
}
