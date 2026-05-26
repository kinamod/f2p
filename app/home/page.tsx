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

const footerColumns = [
  { heading: 'Products', links: [{ label: 'Parts', href: '#' }, { label: 'Diagnostics', href: '#' }, { label: 'Services', href: '#' }] },
  { heading: 'Company', links: [{ label: 'About Bosch', href: '#' }, { label: 'News', href: '#' }, { label: 'Careers', href: '#' }] },
  { heading: 'Support', links: [{ label: 'Contact', href: '#' }, { label: 'Technical Help', href: '#' }, { label: 'Warranty', href: '#' }] },
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
        logo="Bosch"
        columns={footerColumns}
        socialLinks={[{ platform: 'LinkedIn', href: '#' }, { platform: 'YouTube', href: '#' }, { platform: 'Twitter', href: '#' }]}
        copyrightText={`© ${new Date().getFullYear()} Robert Bosch GmbH. All rights reserved.`}
      />
    </>
  );
}
