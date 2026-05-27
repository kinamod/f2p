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
        logo="Bosch Aftermarket"
        columns={[
          {
            heading: 'Parts',
            links: [
              { label: 'Products Overview', href: '/gb/en/parts/products/overview/' },
              { label: 'Parts Catalogue', href: '/gb/en/parts/catalogue/parts-catalogue/' },
            ],
          },
          {
            heading: 'Diagnostics',
            links: [
              { label: 'Diagnostic Solution', href: '/gb/en/diagnostics/workshop-portfolio/diagnostic-solution/' },
              { label: 'ECU Diagnostic Tools', href: '/gb/en/diagnostics/ecu-diagnosis/ecu-diagnostic-tools/' },
              { label: 'Test Equipment', href: '/gb/en/diagnostics/test-equipment/air-conditioning-service/' },
            ],
          },
          {
            heading: 'Services',
            links: [
              { label: 'Service Training', href: '/gb/en/services/training-solutions/service-training/' },
              { label: 'Bosch Car Service', href: '/gb/en/services/workshop-concepts/bosch-car-service/' },
              { label: 'extra Rewards', href: '/gb/en/services/programs/extra-rewards/' },
            ],
          },
          {
            heading: 'News',
            links: [
              { label: 'Read News', href: '/gb/en/news/latest-news-and-stories/read-news/' },
              { label: 'Tips & Technology', href: '/gb/en/news/tips-and-technology/get-tips/' },
              { label: 'Newsletter', href: '/gb/en/news/newsletter/sign-up/' },
              { label: 'Download Centre', href: '/gb/en/news/download-centre/browse-downloads/' },
            ],
          },
        ]}
        legalLinks={[
          { label: 'Imprint', href: '/gb/en/imprint.html' },
          { label: 'Privacy Statement', href: '/gb/en/privacy-statement.html' },
          { label: 'Contact', href: '/gb/en/contact/' },
        ]}
        copyrightText="© 2025 Robert Bosch Ltd. All rights reserved."
      />
    </>
  );
}
