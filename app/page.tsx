'use client';

import '@/builder-registry';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import Carousel from '@/components/Carousel/Carousel';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="showcase-header">
        <h1>Component Showcase</h1>
        <p>Clone a site to populate these components</p>
      </div>

      <div className="showcase-container">

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>AnnouncementBar</h2>
            <p className="showcase-section-description">Dismissible top strip for promotions and announcements.</p>
          </div>
          <div className="showcase-header-wrapper">
            <AnnouncementBar
              message="🎉 New: Check out our latest features"
              linkLabel="Learn more"
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
              logo="Acme"
              links={[
                { label: 'Home', href: '#' },
                { label: 'Features', href: '#' },
                { label: 'Pricing', href: '#' },
              ]}
              ctaLabel="Get Started"
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
              headline="Welcome to Acme"
              subtext="The platform built for modern teams."
              primaryCtaLabel="Get Started"
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
              heading="Why choose us"
              cards={[
                { icon: '⚡', title: 'Fast', body: 'Built for speed from the ground up.' },
                { icon: '🔒', title: 'Secure', body: 'Enterprise-grade security by default.' },
                { icon: '🎨', title: 'Beautiful', body: 'Designed to delight your users.' },
              ]}
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
              slides={[
                { image: 'https://picsum.photos/seed/slide1/1200/500', headline: 'Slide One', subtext: 'Your first message here.' },
                { image: 'https://picsum.photos/seed/slide2/1200/500', headline: 'Slide Two', subtext: 'Your second message here.' },
                { image: 'https://picsum.photos/seed/slide3/1200/500', headline: 'Slide Three', subtext: 'Your third message here.' },
              ]}
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
              testimonials={[
                { quote: 'This product changed the way our team works. Absolutely essential.', name: 'Sarah K.', role: 'CTO', company: 'TechCorp' },
                { quote: 'Incredible value and outstanding support. We could not be happier.', name: 'James R.', role: 'Founder', company: 'StartupXYZ' },
              ]}
            />
          </div>
        </div>

        <div className="showcase-section">
          <div className="showcase-section-header">
            <h2>Footer</h2>
            <p className="showcase-section-description">Multi-row footer with tagline, brand links, legal links, and copyright.</p>
          </div>
          <div className="showcase-footer-wrapper">
            <Footer
              tagline="Technology for life"
              brandLinks={[
                { label: 'Contact', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press', href: '#' },
              ]}
              legalLinks={[
                { label: 'Imprint', href: '#' },
                { label: 'Legal notice', href: '#' },
                { label: 'Privacy statement', href: '#' },
              ]}
              copyrightText={`© ${new Date().getFullYear()} Acme. All rights reserved.`}
              showBackToTop={true}
            />
          </div>
        </div>

      </div>

      <style jsx>{`
        .showcase-header {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
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
