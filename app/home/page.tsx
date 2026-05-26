'use client';

import '@/builder-registry';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import Carousel from '@/components/Carousel/Carousel';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

const navLinks = [
  { label: 'Parts', href: '/gb/en/parts/' },
  { label: 'Diagnostics', href: '/gb/en/diagnostics/' },
  { label: 'Services', href: '/gb/en/services/' },
  { label: 'News', href: '/gb/en/news/' },
];

const featureCards = [
  { icon: '🔧', title: 'OE Quality Parts', body: 'Every component meets original equipment standards — the same parts fitted to vehicles at the factory.' },
  { icon: '🔬', title: 'Advanced Diagnostics', body: 'Industry-leading diagnostic tools and software to identify faults faster and with greater accuracy.' },
  { icon: '🌍', title: 'Global Expertise', body: 'Over 130 years of automotive innovation, trusted by workshops and technicians worldwide.' },
];

const slides = [
  { image: 'https://picsum.photos/seed/bosch1/1200/500', headline: 'Bosch. The automotive influencers', subtext: 'Shaping the automotive industry for over 130 years.', ctaLabel: 'Explore Parts', ctaHref: '#' },
  { image: 'https://picsum.photos/seed/bosch2/1200/500', headline: 'Precision Diagnostics', subtext: 'Find faults faster with Bosch diagnostic solutions.', ctaLabel: 'View Diagnostics', ctaHref: '#' },
  { image: 'https://picsum.photos/seed/bosch3/1200/500', headline: 'Genuine Parts. Total Confidence.', subtext: 'OE quality for every make and model.', ctaLabel: 'Shop Now', ctaHref: '#' },
];

const testimonials = [
  { quote: 'Bosch parts have never let us down. The quality is consistently excellent and delivery is always on time.', name: 'Mark T.', role: 'Workshop Manager', company: 'AutoFix Garages' },
  { quote: 'The diagnostic tools from Bosch have transformed how quickly we can identify and resolve faults.', name: 'Claire W.', role: 'Master Technician', company: 'PrecisionAuto' },
];

const brandLinks = [
  { label: 'Contact', href: 'https://www.boschaftermarket.com/gb/en/contact/', external: false },
  { label: 'Careers at Bosch', href: 'https://www.bosch.com/careers/', external: true },
  { label: 'Bosch Media Service', href: 'https://www.bosch-presse.de/pressportal/de/en/news/', external: true },
  { label: 'Bosch Home Appliances', href: 'https://www.bosch-home.co.uk/', external: true },
  { label: 'Bosch Home & Garden', href: 'https://www.bosch-diy.com/gb/en', external: true },
  { label: 'Worcester Bosch', href: 'https://www.worcester-bosch.co.uk/', external: true },
];

const legalLinks = [
  { label: 'Imprint', href: 'https://www.boschaftermarket.com/gb/en/imprint.html' },
  { label: 'Legal notice', href: 'https://www.boschaftermarket.com/gb/en/legal-notice.html' },
  { label: 'Privacy statement', href: 'https://www.boschaftermarket.com/gb/en/privacy-statement.html' },
  { label: 'Apprentice Programme Privacy Notice', href: 'https://www.boschaftermarket.com/gb/en/apprenticeship-privacy-notice.html' },
  { label: 'Goods and Services - Terms of Supply', href: '#', external: true },
  { label: 'Accessible web content', href: 'https://www.boschaftermarket.com/gb/en/accessibility-statement.html' },
  { label: 'Privacy settings', href: '#' },
];

export default function ClonedHome() {
  return (
    <>
      <AnnouncementBar
        message="New for 2025: Bosch Advanced Driver Assistance Systems now available"
        linkLabel="Find out more"
        linkHref="#"
        dismissible={true}
      />
      <NavBar
        logo="Bosch"
        links={navLinks}
        ctaLabel="Shop Now"
        ctaHref="#"
      />
      <Hero
        headline="Bosch. The automotive influencers"
        subtext="Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are."
        primaryCtaLabel="Explore Parts"
        primaryCtaHref="#"
        secondaryCtaLabel="Learn More"
        secondaryCtaHref="#"
      />
      <FeatureCards
        heading="Why choose Bosch?"
        cards={featureCards}
      />
      <Carousel
        slides={slides}
        autoPlay={true}
        interval={4000}
      />
      <Testimonials
        heading="What our customers say"
        testimonials={testimonials}
      />
      <Footer
        tagline="Technology for life"
        brandLinks={brandLinks}
        legalLinks={legalLinks}
        copyrightText="© 2018 - 2026 Robert Bosch Ltd, all rights reserved"
        showBackToTop={true}
      />
    </>
  );
}
