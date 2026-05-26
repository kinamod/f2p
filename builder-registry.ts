"use client";
import { builder, Builder } from "@builder.io/react";

import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import FeatureCards from "./components/FeatureCards/FeatureCards";
import Carousel from "./components/Carousel/Carousel";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(AnnouncementBar, {
  name: "AnnouncementBar",
  inputs: [
    { name: "message", type: "string", defaultValue: "🎉 New: Check out our latest features" },
    { name: "linkLabel", type: "string" },
    { name: "linkHref", type: "string" },
    { name: "dismissible", type: "boolean", defaultValue: true },
  ],
});

Builder.registerComponent(NavBar, {
  name: "NavBar",
  inputs: [
    { name: "logo", type: "string", defaultValue: "Bosch" },
    {
      name: "links",
      type: "list",
      subFields: [
        { name: "label", type: "string" },
        { name: "href", type: "string" },
      ],
    },
    { name: "ctaLabel", type: "string", defaultValue: "Shop Now" },
    { name: "ctaHref", type: "string", defaultValue: "#" },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "headline", type: "string", defaultValue: "Bosch. The automotive influencers" },
    { name: "subtext", type: "string", defaultValue: "Over 130 years shaping automotive technology." },
    { name: "primaryCtaLabel", type: "string", defaultValue: "Explore Parts" },
    { name: "primaryCtaHref", type: "string", defaultValue: "#" },
    { name: "secondaryCtaLabel", type: "string" },
    { name: "secondaryCtaHref", type: "string" },
    { name: "backgroundImage", type: "file", allowedFileTypes: ["jpeg", "png", "webp", "svg"] },
  ],
});

Builder.registerComponent(FeatureCards, {
  name: "FeatureCards",
  inputs: [
    { name: "heading", type: "string" },
    {
      name: "cards",
      type: "list",
      subFields: [
        { name: "icon", type: "string" },
        { name: "title", type: "string" },
        { name: "body", type: "string" },
      ],
    },
  ],
});

Builder.registerComponent(Carousel, {
  name: "Carousel",
  inputs: [
    {
      name: "slides",
      type: "list",
      subFields: [
        { name: "image", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
        { name: "headline", type: "string" },
        { name: "subtext", type: "string" },
        { name: "ctaLabel", type: "string" },
        { name: "ctaHref", type: "string" },
      ],
    },
    { name: "autoPlay", type: "boolean", defaultValue: true },
    { name: "interval", type: "number", defaultValue: 4000 },
  ],
});

Builder.registerComponent(Testimonials, {
  name: "Testimonials",
  inputs: [
    { name: "heading", type: "string" },
    {
      name: "testimonials",
      type: "list",
      subFields: [
        { name: "quote", type: "string" },
        { name: "name", type: "string" },
        { name: "role", type: "string" },
        { name: "company", type: "string" },
        { name: "avatar", type: "file", allowedFileTypes: ["jpeg", "png", "webp"] },
      ],
    },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    { name: "logo", type: "string", defaultValue: "Bosch" },
    {
      name: "columns",
      type: "list",
      subFields: [
        { name: "heading", type: "string" },
        {
          name: "links",
          type: "list",
          subFields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      type: "list",
      subFields: [
        { name: "platform", type: "string" },
        { name: "href", type: "string" },
      ],
    },
    { name: "copyrightText", type: "string" },
  ],
});
