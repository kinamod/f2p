import '@/builder-registry';
import NavBar from '@/components/NavBar';
import FxtmHero from '@/components/FxtmHero';
import FeatureTeaser from '@/components/FeatureTeaser';
import ProductHighlight from '@/components/ProductHighlight';
import CustomerTestimonial from '@/components/CustomerTestimonial';
import Footer from '@/components/Footer';
import styles from './fxtm-landing.module.css';

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

const fxtmTeaserItems = [
  {
    heading: 'Chasing better entries?',
    subheading: 'FXTM gives you the tools to trade with confidence.',
    mediaType: 'video' as const,
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cabee91a93b10e8a77ca_nemo-robot-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/678d0ad7ff5a494a8392ac60_nemo_robot-transcode.webm',
  },
  {
    heading: 'Want tighter spreads and faster execution?',
    subheading: 'FXTM gives you more of what matters most.',
    mediaType: 'video' as const,
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb18fb3dba5779915289_nemo-car-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790c9c5098af4e5c970c93b_nemo-car-transcode.webm',
  },
  {
    heading: 'Looking for a broker that backs your growth?',
    subheading: 'FXTM gives you more support, every step of the way.',
    mediaType: 'video' as const,
    mobileImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-poster-00001.jpg',
    mobilePosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-poster-00001.jpg',
    mobileVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-transcode.mp4',
    mobileVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cb4c8ea29a545b6ed326_nemo-nefertiti-mobile-transcode.webm',
    desktopImageUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-poster-00001.jpg',
    desktopPosterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-poster-00001.jpg',
    desktopVideoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-transcode.mp4',
    desktopVideoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790ca4109d3d0d6c9cba4c9_nemo-nefertiti-transcode.webm',
  },
];

const fxtmHighlightSlides = [
  {
    posterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-poster-00001.jpg',
    videoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-transcode.mp4',
    videoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6361599634c95743bef8_nemo-phone-transcode.webm',
    primaryText: 'FXTM gives you real-time insight across the markets that move you',
    secondaryText: 'so you can act on opportunity the moment it appears.',
  },
  {
    posterUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-poster-00001.jpg',
    videoMp4Url:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-transcode.mp4',
    videoWebmUrl:
      'https://cdn.prod.website-files.com/678241dab67384084128e2ec/6790cba307de585a188d80d7_nemo-nemes-transcode.webm',
    primaryText: 'FXTM gives you more — more markets, more tools, more control.',
    secondaryText: 'Trading made simple, without losing its edge.',
  },
];

export default function FxtmLandingPage() {
  return (
    <main className={styles.fxtmTheme}>
      <NavBar links={fxtmNavLinks} />
      <FxtmHero heading="FXTM gives you more" />
      <FeatureTeaser items={fxtmTeaserItems} />
      <ProductHighlight
        slides={fxtmHighlightSlides}
        ctaLabel="TAKE ME TO FXTM"
        ctaHref="/fxtm"
      />
      <CustomerTestimonial
        customerName="Daniel Osei"
        quoteLines={['"Trading felt overwhelming until I found FXTM.', 'Now every decision feels informed."']}
        location="DANIEL OSEI, ACCRA, GHANA"
      />
      <Footer />
    </main>
  );
}
