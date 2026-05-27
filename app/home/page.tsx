'use client';

import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import NavBar from '@/components/NavBar/NavBar';
import Carousel from '@/components/Carousel/Carousel';
import FeatureCards from '@/components/FeatureCards/FeatureCards';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function ClonedHome() {
  return (
    <>
      <AnnouncementBar
        message="New: Bosch Automotive Skills Bootcamp — register now"
        linkLabel="Learn more"
        linkHref="/gb/en/services/training-solutions/automotive-skills-bootcamp/"
        dismissible={true}
      />
      <NavBar
        links={[
          { label: 'Parts', href: '/gb/en/parts/' },
          { label: 'Diagnostics', href: '/gb/en/diagnostics/' },
          { label: 'Services', href: '/gb/en/services/' },
          { label: 'News', href: '/gb/en/news/' },
        ]}
        ctaLabel="Contact"
        ctaHref="/gb/en/contact/"
        subBrand="Mobility Aftermarket United Kingdom and Ireland"
      />
      <Carousel
        slides={[
          {
            image: 'https://www.boschaftermarket.com/xrm/media/images/services/news_3/25_5_influencer/campaign_image_robert_bosch_influencer_post_slider_res_992x558.webp',
            headline: 'Bosch. The automotive influencers',
            subtext: "Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are.",
            ctaLabel: 'Read the article',
            ctaHref: '/gb/en/news/latest-news-and-stories/bosch-automotive-influencers/',
            textPosition: 'top-left',
            overlayTheme: 'white',
          },
          {
            image: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/gb/w2b_banner_en_res_992x558.webp',
            headline: 'Need wiper blades for your car?',
            subtext: "Enter your car details, find the right part and use our Where-to-Buy service to order compatible Bosch wiper blades directly from our partners' websites.",
            ctaLabel: 'Find your wiper blades now',
            ctaHref: '/gb/en/parts/',
            textPosition: 'bottom-left',
            overlayTheme: 'grey',
          },
          {
            image: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/de/news_downloads/23_2_bosch_brakes_1/born_safe_bremsscheibe_res_992x558.webp',
            headline: 'Born safe. Bosch Brakes.',
            subtext: 'Discover the full range of Bosch brake components — engineered for reliability and safety at every stop.',
            ctaLabel: 'Explore brakes',
            ctaHref: '/gb/en/parts/products/overview/',
            textPosition: 'bottom-left',
            overlayTheme: 'white',
          },
        ]}
        autoPlay={true}
        interval={5000}
      />
      <FeatureCards
        heading="What we offer"
        cards={[
          {
            icon: '🔧',
            title: 'Parts',
            body: 'A comprehensive range of Bosch automotive parts — from brake discs to wiper blades — all engineered to original equipment standards.',
            linkLabel: 'Browse parts',
            linkHref: '/gb/en/parts/',
          },
          {
            icon: '🖥️',
            title: 'Diagnostics',
            body: 'Industry-leading diagnostic tools and software to keep your workshop at the cutting edge of vehicle technology.',
            linkLabel: 'Explore diagnostics',
            linkHref: '/gb/en/diagnostics/',
          },
          {
            icon: '🎓',
            title: 'Training & Services',
            body: 'Technical training programmes, workshop concepts, and service solutions designed to grow your business and skills.',
            linkLabel: 'See services',
            linkHref: '/gb/en/services/',
          },
        ]}
      />
      <Testimonials
        heading="What our partners say"
        testimonials={[
          {
            quote: "Bosch diagnostic tools have transformed our workshop efficiency. The ESI[tronic] software gives us confidence on every job, new or old.",
            name: 'James Hartley',
            role: 'Workshop Manager',
            company: 'Hartley Auto Services',
          },
          {
            quote: "The extra Rewards programme has made a real difference to our bottom line. Bosch parts quality speaks for itself — our customers trust the brand.",
            name: 'Sarah Connell',
            role: 'Parts Manager',
            company: 'Premier Motor Group',
          },
        ]}
      />
      <Footer
        tagline="Technology for life"
        brandLinks={[
          { label: 'Contact', href: 'https://www.boschaftermarket.com/gb/en/contact/', external: false },
          { label: 'Careers at Bosch', href: 'https://www.bosch.com/careers/', external: true },
          { label: 'Bosch Media Service', href: 'https://www.bosch-presse.de/pressportal/de/en/news/', external: true },
          { label: 'Bosch Home Appliances', href: 'https://www.bosch-home.co.uk/', external: true },
          { label: 'Bosch Home & Garden', href: 'https://www.bosch-diy.com/gb/en', external: true },
          { label: 'Worcester Bosch', href: 'https://www.worcester-bosch.co.uk/how-to-buy-your-boiler', external: true },
        ]}
        legalLinks={[
          { label: 'Imprint', href: 'https://www.boschaftermarket.com/gb/en/imprint.html', external: false },
          { label: 'Legal notice', href: 'https://www.boschaftermarket.com/gb/en/legal-notice.html', external: false },
          { label: 'Privacy statement', href: 'https://www.boschaftermarket.com/gb/en/privacy-statement.html', external: false },
          { label: 'Apprentice Programme Privacy Notice', href: 'https://www.boschaftermarket.com/gb/en/apprenticeship-privacy-notice.html', external: false },
          { label: 'Goods and Services - Terms of Supply', href: 'https://www.boschaftermarket.com/xrm/media/images/country_specific/gb/bosch_terms_for_supply_of_goods_and_service.pdf', external: true },
          { label: 'Accessible web content', href: 'https://www.boschaftermarket.com/gb/en/accessibility-statement.html', external: false },
          { label: 'Privacy settings', href: '#', external: false },
        ]}
        copyrightText="© 2018 - 2026 Robert Bosch Ltd, all rights reserved"
        showBackToTop={true}
      />
    </>
  );
}
