// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: "Supreme",
      cssVariable: "--font-supreme",
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    {
      provider: fontProviders.fontshare(),
      name: "Gambarino",
      cssVariable: "--font-gambarino",
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  ],
});
