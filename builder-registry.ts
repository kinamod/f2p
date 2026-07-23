"use client";
import { builder, Builder } from "@builder.io/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeatureTeaser from "./components/FeatureTeaser";
import ProductHighlight from "./components/ProductHighlight";
import CustomerTestimonial from "./components/CustomerTestimonial";
import Footer from "./components/Footer";
import FxtmHero from "./components/FxtmHero";
import PulseHero from "./components/PulseHero";
import PipWorldHero from "./components/PipWorldHero";
import ExinityConnectHero from "./components/ExinityConnectHero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(NavBar, {
  name: "NavBar",
  inputs: [
    {
      name: "logoUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp", "svg"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67858a1e39973dbac37f6e02_exinity.svg",
    },
    { name: "logoAlt", type: "string", defaultValue: "Exinity" },
    {
      name: "instagramUrl",
      type: "url",
      defaultValue: "https://www.instagram.com/exinity/",
    },
    {
      name: "linkedinUrl",
      type: "url",
      defaultValue: "https://www.linkedin.com/company/exinity/",
    },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "breadcrumbLabel", type: "string", defaultValue: "BRANDS" },
    { name: "breadcrumbHref", type: "url", defaultValue: "/brand" },
    { name: "currentLabel", type: "string", defaultValue: "NEMO" },
    {
      name: "heading",
      type: "longText",
      defaultValue: "Nemo means you never miss an opportunity – beautifully",
    },
    {
      name: "posterUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp", "svg"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ae14d27a27d860f5adad4e_nemo-hero-poster-00001.jpg",
    },
    {
      name: "videoMp4Url",
      type: "file",
      allowedFileTypes: ["mp4"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ae14d27a27d860f5adad4e_nemo-hero-transcode.mp4",
    },
    {
      name: "videoWebmUrl",
      type: "file",
      allowedFileTypes: ["webm"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ae14d27a27d860f5adad4e_nemo-hero-transcode.webm",
    },
    { name: "enterHref", type: "string", defaultValue: "#section-2" },
  ],
});

const heroVideoInputs = (posterUrl: string, mp4Url: string, webmUrl: string) => [
  {
    name: "posterUrl",
    type: "file",
    allowedFileTypes: ["jpeg", "png", "webp", "svg"],
    defaultValue: posterUrl,
  },
  {
    name: "videoMp4Url",
    type: "file",
    allowedFileTypes: ["mp4"],
    defaultValue: mp4Url,
  },
  {
    name: "videoWebmUrl",
    type: "file",
    allowedFileTypes: ["webm"],
    defaultValue: webmUrl,
  },
];

Builder.registerComponent(FxtmHero, {
  name: "FxtmHero",
  inputs: [
    { name: "breadcrumbLabel", type: "string", defaultValue: "BRANDS" },
    { name: "breadcrumbHref", type: "url", defaultValue: "/brand" },
    { name: "currentLabel", type: "string", defaultValue: "FXTM" },
    {
      name: "heading",
      type: "longText",
      defaultValue: "FXTM: giving traders more",
    },
    ...heroVideoInputs(
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67aa792a254ca261a6638ec2_fxtm-hero-poster-00001.jpg",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67aa792a254ca261a6638ec2_fxtm-hero-transcode.mp4",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67aa792a254ca261a6638ec2_fxtm-hero-transcode.webm"
    ),
    { name: "enterHref", type: "string", defaultValue: "#section-2" },
  ],
});

Builder.registerComponent(PulseHero, {
  name: "PulseHero",
  inputs: [
    { name: "breadcrumbLabel", type: "string", defaultValue: "BRANDS" },
    { name: "breadcrumbHref", type: "url", defaultValue: "/brand" },
    { name: "currentLabel", type: "string", defaultValue: "PULSE" },
    {
      name: "heading",
      type: "longText",
      defaultValue: "Pulse. It makes the markets fun. (And makes a market for us)",
    },
    ...heroVideoInputs(
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab68bd6d868e68553065d1_pulse-hero-desktop-poster-00001.jpg",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab68bd6d868e68553065d1_pulse-hero-desktop-transcode.mp4",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab68bd6d868e68553065d1_pulse-hero-desktop-transcode.webm"
    ),
    { name: "enterHref", type: "string", defaultValue: "#section-2" },
  ],
});

Builder.registerComponent(PipWorldHero, {
  name: "PipWorldHero",
  inputs: [
    { name: "breadcrumbLabel", type: "string", defaultValue: "BRANDS" },
    { name: "breadcrumbHref", type: "url", defaultValue: "/brand" },
    { name: "currentLabel", type: "string", defaultValue: "PIP WORLD" },
    {
      name: "heading",
      type: "longText",
      defaultValue: "How a virtual world is building real financial skill",
    },
    ...heroVideoInputs(
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-poster-00001.jpg",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-transcode.mp4",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/679ce2b99b55ed1cdc366fb6_PiP-hero-transcode.webm"
    ),
    { name: "enterHref", type: "string", defaultValue: "#section-2" },
  ],
});

Builder.registerComponent(ExinityConnectHero, {
  name: "ExinityConnectHero",
  inputs: [
    { name: "breadcrumbLabel", type: "string", defaultValue: "BRANDS" },
    { name: "breadcrumbHref", type: "url", defaultValue: "/brand" },
    { name: "currentLabel", type: "string", defaultValue: "EXINITY CONNECT" },
    {
      name: "heading",
      type: "longText",
      defaultValue: "Exinity Connect. Connecting brokers with exceptional liquidity",
    },
    ...heroVideoInputs(
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-poster-00001.jpg",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-transcode.mp4",
      "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67ab6d3cd28d710a7151b235_connect-hero-desktop-transcode.webm"
    ),
    { name: "enterHref", type: "string", defaultValue: "#section-2" },
  ],
});

Builder.registerComponent(FeatureTeaser, {
  name: "FeatureTeaser",
  inputs: [],
});

Builder.registerComponent(ProductHighlight, {
  name: "ProductHighlight",
  inputs: [
    { name: "ctaLabel", type: "string", defaultValue: "TAKE ME TO NEMO" },
    { name: "ctaHref", type: "url", defaultValue: "https://nemo.money/" },
  ],
});

Builder.registerComponent(CustomerTestimonial, {
  name: "CustomerTestimonial",
  inputs: [
    { name: "customerName", type: "string", defaultValue: "Amara Jahani" },
    {
      name: "location",
      type: "string",
      defaultValue: "AMARA JAHANI, SHARJAH, UAE",
    },
    {
      name: "posterUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp", "svg"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-poster-00001.jpg",
    },
    {
      name: "videoMp4Url",
      type: "file",
      allowedFileTypes: ["mp4"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-transcode.mp4",
    },
    {
      name: "videoWebmUrl",
      type: "file",
      allowedFileTypes: ["webm"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/6791643474bfeaed3acd1363_nemo-snorkling-transcode.webm",
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    {
      name: "logoUrl",
      type: "file",
      allowedFileTypes: ["jpeg", "png", "webp", "svg"],
      defaultValue:
        "https://cdn.prod.website-files.com/678241dab67384084128e2ec/67af56b9a51e71fcbcb2480d_exinity-logo.svg",
    },
    { name: "logoAlt", type: "string", defaultValue: "Exinity" },
    {
      name: "instagramUrl",
      type: "url",
      defaultValue: "https://www.instagram.com/exinity/",
    },
    {
      name: "linkedinUrl",
      type: "url",
      defaultValue: "https://www.linkedin.com/company/exinity/",
    },
    {
      name: "copyrightText",
      type: "string",
      defaultValue: "© 2026 Exinity",
    },
    { name: "privacyHref", type: "url", defaultValue: "/policies" },
    { name: "topHref", type: "string", defaultValue: "#section-1" },
  ],
});
