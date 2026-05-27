"use client";
import { builder, Builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

Builder.registerComponent(AnnouncementBar, {
  name: "AnnouncementBar",
  inputs: [
    { name: "message", type: "string", defaultValue: "New: Bosch Automotive Skills Bootcamp — register now" },
    { name: "linkLabel", type: "string", defaultValue: "Learn more" },
    { name: "linkHref", type: "url", defaultValue: "/gb/en/services/training-solutions/automotive-skills-bootcamp/" },
    { name: "dismissible", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(NavBar, {
  name: "NavBar",
  inputs: [
    {
      name: "links",
      type: "list",
      defaultValue: [
        { label: "Parts", href: "/gb/en/parts/" },
        { label: "Diagnostics", href: "/gb/en/diagnostics/" },
        { label: "Services", href: "/gb/en/services/" },
        { label: "News", href: "/gb/en/news/" },
      ],
      subFields: [
        { name: "label", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    { name: "ctaLabel", type: "string", defaultValue: "Contact" },
    { name: "ctaHref", type: "url", defaultValue: "/gb/en/contact/" },
    { name: "subBrand", type: "string", defaultValue: "Mobility Aftermarket United Kingdom and Ireland" },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "headline", type: "string", defaultValue: "Bosch. The automotive influencers" },
    { name: "subtext", type: "longText", defaultValue: "Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are." },
    { name: "primaryCtaLabel", type: "string", defaultValue: "Read the article" },
    { name: "primaryCtaHref", type: "url", defaultValue: "/gb/en/news/latest-news-and-stories/bosch-automotive-influencers/" },
    { name: "backgroundImage", type: "file", allowedFileTypes: ["jpeg", "png", "webp", "svg"], defaultValue: "https://www.boschaftermarket.com/xrm/media/images/services/news_3/25_5_influencer/campaign_image_robert_bosch_influencer_post_slider_res_992x558.webp" },
    { name: "textPosition", type: "string", enum: ["top-left", "bottom-left", "center"], defaultValue: "top-left" },
    { name: "overlayTheme", type: "string", enum: ["white", "grey", "dark"], defaultValue: "white" },
  ],
});

Builder.registerComponent(Carousel, {
  name: "Carousel",
  inputs: [
    {
      name: "slides",
      type: "list",
      defaultValue: [
        {
          image: "https://www.boschaftermarket.com/xrm/media/images/services/news_3/25_5_influencer/campaign_image_robert_bosch_influencer_post_slider_res_992x558.webp",
          headline: "Bosch. The automotive influencers",
          subtext: "Bosch have been shaping the automotive industry and whilst many people today claim to be influencers, with over 130 years' experience shaping automotive technology, we really are.",
          ctaLabel: "Read the article",
          ctaHref: "/gb/en/news/latest-news-and-stories/bosch-automotive-influencers/",
          textPosition: "top-left",
          overlayTheme: "white",
        },
        {
          image: "https://www.boschaftermarket.com/xrm/media/images/country_specific/gb/w2b_banner_en_res_992x558.webp",
          headline: "Need wiper blades for your car?",
          subtext: "Enter your car details, find the right part and use our Where-to-Buy service to order compatible Bosch wiper blades directly from our partners' websites.",
          ctaLabel: "Find your wiper blades now",
          ctaHref: "/gb/en/parts/",
          textPosition: "bottom-left",
          overlayTheme: "grey",
        },
      ],
      subFields: [
        { name: "image", type: "file", allowedFileTypes: ["jpeg", "png", "webp", "svg"] },
        { name: "headline", type: "string" },
        { name: "subtext", type: "longText" },
        { name: "ctaLabel", type: "string" },
        { name: "ctaHref", type: "url" },
        { name: "textPosition", type: "string", enum: ["top-left", "bottom-left", "center"] },
        { name: "overlayTheme", type: "string", enum: ["white", "grey", "dark"] },
      ],
    },
    { name: "autoPlay", type: "boolean", defaultValue: true },
    { name: "interval", type: "number", defaultValue: 5000 },
  ],
});

Builder.registerComponent(FeatureCards, {
  name: "FeatureCards",
  inputs: [
    { name: "heading", type: "string", defaultValue: "What we offer" },
    {
      name: "cards",
      type: "list",
      defaultValue: [
        { icon: "🔧", title: "Parts", body: "A comprehensive range of Bosch automotive parts — from brake discs to wiper blades — all engineered to original equipment standards.", linkLabel: "Browse parts", linkHref: "/gb/en/parts/" },
        { icon: "🖥️", title: "Diagnostics", body: "Industry-leading diagnostic tools and software to keep your workshop at the cutting edge of vehicle technology.", linkLabel: "Explore diagnostics", linkHref: "/gb/en/diagnostics/" },
        { icon: "🎓", title: "Training & Services", body: "Technical training programmes, workshop concepts, and service solutions designed to grow your business and skills.", linkLabel: "See services", linkHref: "/gb/en/services/" },
      ],
      subFields: [
        { name: "icon", type: "string" },
        { name: "title", type: "string" },
        { name: "body", type: "longText" },
        { name: "linkLabel", type: "string" },
        { name: "linkHref", type: "url" },
      ],
    },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials",
  inputs: [
    { name: "heading", type: "string", defaultValue: "What our partners say" },
    {
      name: "testimonials",
      type: "list",
      defaultValue: [
        { quote: "Bosch diagnostic tools have transformed our workshop efficiency. The ESI[tronic] software gives us confidence on every job.", name: "James Hartley", role: "Workshop Manager", company: "Hartley Auto Services" },
        { quote: "The extra Rewards programme has made a real difference to our bottom line. Bosch parts quality speaks for itself.", name: "Sarah Connell", role: "Parts Manager", company: "Premier Motor Group" },
      ],
      subFields: [
        { name: "quote", type: "longText" },
        { name: "name", type: "string" },
        { name: "role", type: "string" },
        { name: "company", type: "string" },
        { name: "avatar", type: "file", allowedFileTypes: ["jpeg", "png", "webp", "svg"] },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    { name: "logo", type: "string", defaultValue: "Bosch Aftermarket" },
    {
      name: "columns",
      type: "list",
      defaultValue: [
        { heading: "Parts", links: [{ label: "Products Overview", href: "/gb/en/parts/products/overview/" }] },
        { heading: "Diagnostics", links: [{ label: "Diagnostic Solution", href: "/gb/en/diagnostics/workshop-portfolio/diagnostic-solution/" }] },
        { heading: "Services", links: [{ label: "Service Training", href: "/gb/en/services/training-solutions/service-training/" }] },
        { heading: "News", links: [{ label: "Read News", href: "/gb/en/news/latest-news-and-stories/read-news/" }] },
      ],
      subFields: [
        { name: "heading", type: "string" },
        { name: "links", type: "list", subFields: [{ name: "label", type: "string" }, { name: "href", type: "url" }] },
      ],
    },
    {
      name: "legalLinks",
      type: "list",
      defaultValue: [
        { label: "Imprint", href: "/gb/en/imprint.html" },
        { label: "Privacy Statement", href: "/gb/en/privacy-statement.html" },
        { label: "Contact", href: "/gb/en/contact/" },
      ],
      subFields: [
        { name: "label", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    { name: "copyrightText", type: "string", defaultValue: "© 2025 Robert Bosch Ltd. All rights reserved." },
  ],
});
