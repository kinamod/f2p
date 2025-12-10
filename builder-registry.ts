"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import VtexHeader from "./components/VtexHeader/VtexHeader";
import EstatesGallery from "./components/EstatesGallery/EstatesGallery";

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

Builder.registerComponent(VtexHeader, {
  name: "VtexHeader",
  inputs: [],
});

Builder.registerComponent(EstatesGallery, {
  name: "EstatesGallery",
  inputs: [],
});
