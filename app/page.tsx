'use client';

import '@/builder-registry';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import Carousel from '@/components/Carousel/Carousel';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

const boschNavLinks = [
  { label: 'Parts', href: '/gb/en/parts/' },
  { label: 'Diagnostics', href: '/gb/en/diagnostics/' },
  { label: 'Services', href: '/gb/en/services/' },
  { label: 'News', href: '/gb/en/news/' },
];

const boschCards = [
  { icon: '🔧', title: 'OE Quality Parts', body: 'Every component meets original equipment standards — the same parts fitted to vehicles at the factory.' },
  { icon: '🔬', title: 'Advanced Diagnostics', body: 'Industry-leading diagnostic tools and software to identify faults faster and with greater accuracy.' },
  { icon: '🌍', title: 'Global Expertise', body: 'Over 130 years of automotive innovation, trusted by workshops and technicians worldwide.' },
];

const boschSlides = [
  { image: 'https://picsum.photos/seed/bosch1/1200/500', headline: 'Bosch. The automotive influencers', subtext: 'Shaping the automotive industry for over 130 years.', ctaLabel: 'Explore Parts', ctaHref: '#' },
  { image: 'https://picsum.photos/seed/bosch2/1200/500', headline: 'Precision Diagnostics', subtext: 'Find faults faster with Bosch diagnostic solutions.', ctaLabel: 'View Diagnostics', ctaHref: '#' },
  { image: 'https://picsum.photos/seed/bosch3/1200/500', headline: 'Genuine Parts. Total Confidence.', subtext: 'OE quality for every make and model.', ctaLabel: 'Shop Now', ctaHref: '#' },
];

const boschTestimonials = [
  { quote: 'Bosch parts have never let us down. The quality is consistently excellent and delivery is always on time.', name: 'Mark T.', role: 'Workshop Manager', company: 'AutoFix Garages' },
  { quote: 'The diagnostic tools from Bosch have transformed how quickly we can identify and resolve faults.', name: 'Claire W.', role: 'Master Technician', company: 'PrecisionAuto' },
];

const boschFooterColumns = [
  { heading: 'Products', links: [{ label: 'Parts', href: '#' }, { label: 'Diagnostics', href: '#' }, { label: 'Services', href: '#' }] },
  { heading: 'Company', links: [{ label: 'About Bosch', href: '#' }, { label: 'News', href: '#' }, { label: 'Careers', href: '#' }] },
  { heading: 'Support', links: [{ label: 'Contact', href: '#' }, { label: 'Technical Help', href: '#' }, { label: 'Warranty', href: '#' }] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="showcase-header">
        <h1>Component Showcase</h1>
        <p>Bosch Aftermarket — cloned from boschaftermarket.com</p>
      </div>

      <div className="showcase-container">

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>AnnouncementBar</h2>
            <p className="showcase-section-description">Dismissible top strip for promotions and announcements.</p>
          </div>
          <div className="showcase-header-wrapper">
            <AnnouncementBar
              message="New for 2025: Bosch Advanced Driver Assistance Systems now available"
              linkLabel="Find out more"
              linkHref="#"
              dismissible={true}
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>NavBar</h2>
            <p className="showcase-section-description">Sticky navigation with logo, links, and a CTA button.</p>
          </div>
          <div className="showcase-header-wrapper">
            <NavBar
              logo="Bosch"
              links={boschNavLinks}
              ctaLabel="Shop Now"
              ctaHref="#"
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Hero</h2>
            <p className="showcase-section-description">Full-width hero with headline, subtext, and dual CTAs.</p>
          </div>
          <div className="showcase-header-wrapper">
            <Hero
              headline="Bosch. The automotive influencers"
              subtext="Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are."
              primaryCtaLabel="Explore Parts"
              primaryCtaHref="#"
              secondaryCtaLabel="Learn More"
              secondaryCtaHref="#"
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>FeatureCards</h2>
            <p className="showcase-section-description">Responsive grid of icon + title + body cards.</p>
          </div>
          <div className="showcase-component-wrapper">
            <FeatureCards
              heading="Why choose Bosch?"
              cards={boschCards}
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Carousel</h2>
            <p className="showcase-section-description">Auto-playing image slider with prev/next controls and dot indicators.</p>
          </div>
          <div className="showcase-header-wrapper">
            <Carousel
              slides={boschSlides}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Testimonials</h2>
            <p className="showcase-section-description">Customer quotes in a responsive grid layout.</p>
          </div>
          <div className="showcase-component-wrapper">
            <Testimonials
              heading="What our customers say"
              testimonials={boschTestimonials}
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Footer</h2>
            <p className="showcase-section-description">Multi-column footer with logo, links, social icons, and copyright.</p>
          </div>
          <div className="showcase-footer-wrapper">
            <Footer
              logo="Bosch"
              columns={boschFooterColumns}
              socialLinks={[{ platform: 'LinkedIn', href: '#' }, { platform: 'YouTube', href: '#' }, { platform: 'Twitter', href: '#' }]}
              copyrightText={`© ${new Date().getFullYear()} Robert Bosch GmbH. All rights reserved.`}
            />
          </div>
        </div>

      </div>

      <style jsx>{`
        .showcase-header {
          background: linear-gradient(135deg, #ed0007 0%, #a00005 100%);
          color: white;
          padding: 60px 20px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .showcase-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .showcase-header p {
          font-size: 18px;
          margin: 0;
          opacity: 0.9;
          font-weight: 500;
        }

        .showcase-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .showcase-section {
          margin-bottom: 80px;
        }

        .showcase-section-header {
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .showcase-section-header h2 {
          font-size: 32px;
          font-weight: 700;
          margin: 0 0 12px 0;
          color: #1a202c;
          letter-spacing: -0.01em;
        }

        .showcase-section-description {
          font-size: 16px;
          color: #718096;
          margin: 0;
          max-width: 600px;
          line-height: 1.6;
        }

        .showcase-component-wrapper {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .showcase-header-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          overflow: visible;
        }

        .showcase-footer-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
        }
      `}</style>
    </div>
  );
}
