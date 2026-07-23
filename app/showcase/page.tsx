import '@/builder-registry';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeatureTeaser from '@/components/FeatureTeaser';
import ProductHighlight from '@/components/ProductHighlight';
import CustomerTestimonial from '@/components/CustomerTestimonial';
import Footer from '@/components/Footer';
import FxtmHero from '@/components/FxtmHero';
import PulseHero from '@/components/PulseHero';
import PipWorldHero from '@/components/PipWorldHero';
import ExinityConnectHero from '@/components/ExinityConnectHero';
import styles from './showcase.module.css';

export default function ShowcasePage() {
  return (
    <main className={styles.showcaseMain}>
      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Nav Bar</h2>
          <p className={styles.showcaseSectionDescription}>
            Fixed side navigation with logo, expandable brand menu, and social links.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <NavBar />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>FXTM Hero</h2>
          <p className={styles.showcaseSectionDescription}>
            Full-screen video hero for the FXTM brand page, with breadcrumb and enter/scroll controls.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <FxtmHero />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Nemo Hero</h2>
          <p className={styles.showcaseSectionDescription}>
            Full-screen video hero with breadcrumb, headline, and enter/scroll controls.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <Hero />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Pulse Hero</h2>
          <p className={styles.showcaseSectionDescription}>
            Full-screen video hero for the Pulse brand page, with breadcrumb and enter/scroll controls.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <PulseHero />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>PiP World Hero</h2>
          <p className={styles.showcaseSectionDescription}>
            Centered video-logo hero for the PiP World brand page, with breadcrumb and enter/scroll controls.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <PipWorldHero />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Exinity Connect Hero</h2>
          <p className={styles.showcaseSectionDescription}>
            Full-screen video hero for the Exinity Connect brand page, with breadcrumb and enter/scroll controls.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <ExinityConnectHero />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Feature Teaser</h2>
          <p className={styles.showcaseSectionDescription}>
            Two-column teaser grid pairing stacked product videos with copy highlights.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <FeatureTeaser />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Product Highlight</h2>
          <p className={styles.showcaseSectionDescription}>
            Interactive video/copy switcher with a sticky call-to-action button.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <ProductHighlight />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Customer Testimonial</h2>
          <p className={styles.showcaseSectionDescription}>
            Customer quote section paired with a background video.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <CustomerTestimonial />
        </div>
      </section>

      <section className={styles.showcaseSection}>
        <div className={styles.showcaseSectionHeader}>
          <h2>Footer</h2>
          <p className={styles.showcaseSectionDescription}>
            Site footer with logo, social links, legal disclosures, and back-to-top control.
          </p>
        </div>
        <div className={styles.showcaseComponentWrapper}>
          <Footer />
        </div>
      </section>
    </main>
  );
}
