"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import EstatesGallery from "./components/EstatesGallery/EstatesGallery";
import EventCard from "./components/EventCard/EventCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(EstatesGallery, {
  name: "EstatesGallery",
  inputs: [],
});

Builder.registerComponent(EventCard, {
  name: "EventCard",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Event Title",
    },
    {
      name: "date",
      type: "string",
      defaultValue: "January 15, 2024",
    },
    {
      name: "time",
      type: "string",
      defaultValue: "10:00 AM",
    },
    {
      name: "location",
      type: "string",
      defaultValue: "Event Location",
    },
    {
      name: "description",
      type: "string",
      defaultValue:
        "Description of the event goes here. This can be a brief summary of what attendees can expect.",
    },
    {
      name: "imageUrl",
      type: "string",
      defaultValue:
        "https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=500&h=300&fit=crop",
    },
    {
      name: "imageAlt",
      type: "string",
      defaultValue: "Event image",
    },
    {
      name: "ctaText",
      type: "string",
      defaultValue: "Learn More",
    },
    {
      name: "ctaLink",
      type: "string",
      defaultValue: "#",
    },
    {
      name: "category",
      type: "string",
      defaultValue: "Event",
    },
    {
      name: "featured",
      type: "boolean",
      defaultValue: false,
    },
  ],
});
