// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
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
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      plugins: [catppuccin()],
    }),
  ],
});
