import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dzaki Rozaan PWA",
    short_name: "DzakiRZ",
    description: "A Progressive Web App built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/myIcon512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
}
