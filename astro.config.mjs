// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  integrations: [
    mdx(),
    icon({
      include: {
        lucide: ["*"],
        "vscode-icons": ["*"],
        guidance: ["up-arrow"],
      },
    }),
  ],
});
