"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import EstatesGallery from "./components/EstatesGallery/EstatesGallery";
import RetailTrustHeader from "./components/RetailTrustHeader/RetailTrustHeader";

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

Builder.registerComponent(RetailTrustHeader, {
  name: "RetailTrustHeader",
  inputs: [],
});
