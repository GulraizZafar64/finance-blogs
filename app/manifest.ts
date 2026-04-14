import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WealthPilot - Expert Financial Insights",
    short_name: "WealthPilot",
    description: "Expert advice on personal finance, investment strategies, and financial freedom.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1c2136",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
