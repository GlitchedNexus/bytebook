// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
// import { ion } from "starlight-ion-theme";
// import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ByteBook",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/GlitchedNexus/bolt.github.io",
        },
      ],
      sidebar: [
        {
          label: "Overview",
          autogenerate: { directory: "overview" },
        },
        {
          label: "Loading Data",
          autogenerate: { directory: "loading-data" },
        },
        {
          label: "Cleaning Data",
          autogenerate: { directory: "cleaning-data" },
        },
        {
          label: "Data Visualization",
          autogenerate: { directory: "data-visualization" },
        },
        {
          label: "Classification",
          autogenerate: { directory: "classification" },
        },
        {
          label: "Clustering",
          autogenerate: { directory: "clustering" },
        },
        {
          label: "Regression",
          autogenerate: { directory: "regression" },
        },
        {
          label: "References",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "mauve" },
          light: { flavor: "latte", accent: "flamingo" },
        }),
        // ion(),
        // starlightThemeFlexoki({ accentColor: "purple" }),
      ],
    }),
  ],
});
