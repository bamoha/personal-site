import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

export default defineConfig({
  site: "https://bhamza.dev",
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    resolve: {
      alias: {
        "@layouts": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/layouts"),
        "@components": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/components"),
        "@lib": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/lib"),
        "@consts": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/consts.ts"),
        "@types": resolve(fileURLToPath(new URL(".", import.meta.url)), "src/types.ts"),
      },
    },
  },
});
