import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olympia Futarchy — Prediction Markets for Ethereum Classic",
    short_name: "Futarchy",
    description:
      "Prediction market governance for Ethereum Classic. Trade on proposal outcomes, resolve via oracles, and settle on-chain.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0f10",
    theme_color: "#00ffae",
    icons: [
      { src: "/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
