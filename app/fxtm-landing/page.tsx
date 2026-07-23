import '@/builder-registry';
import NavBar from '@/components/NavBar';
import FxtmHero from '@/components/FxtmHero';
import FeatureTeaser from '@/components/FeatureTeaser';
import ProductHighlight from '@/components/ProductHighlight';
import CustomerTestimonial from '@/components/CustomerTestimonial';
import Footer from '@/components/Footer';

const fxtmNavLinks = [
  {
    label: 'Our brands',
    href: '/brand',
    subLinks: [
      { label: 'FXTM', href: '/fxtm', isCurrent: true },
      { label: 'Nemo', href: '/nemo' },
      { label: 'Pulse', href: '/pulse' },
      { label: 'PiP World', href: '/pip-world' },
      { label: 'Exinity Connect', href: '/exinity-connect' },
    ],
  },
  {
    label: 'About us',
    href: '/about-us',
    subLinks: [
      { label: 'Who we are', href: '/about-us#who-we-are' },
      { label: 'Where we are', href: '/about-us#where-we-are' },
      { label: 'Work with us', href: '/about-us#work-with-us' },
    ],
  },
  {
    label: 'Our commitments',
    href: '/our-commitments',
    subLinks: [
      { label: 'Governance', href: '/our-commitments#governance' },
      { label: 'Sustainable business', href: '/our-commitments#sustainable-business' },
      { label: 'Charitable partners', href: '/our-commitments#charitable-partners' },
    ],
  },
  { label: 'Partner with us', href: '/partner-with-us', isLast: true },
];

export default function FxtmLandingPage() {
  return (
    <main>
      <NavBar links={fxtmNavLinks} />
      <FxtmHero />
      <FeatureTeaser />
      <ProductHighlight ctaLabel="TAKE ME TO FXTM" ctaHref="/fxtm" />
      <CustomerTestimonial />
      <Footer />
    </main>
  );
}
