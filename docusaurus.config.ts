import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "YOMINA",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/kedama-t/yomina-doc/blob/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "YOMINA - Doc",
      logo: {
        alt: "My Site Logo",
        src: "https://yomina.app/images/icon128.png",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "はじめに",
        },
        {
          type: "docSidebar",
          sidebarId: "quickStart",
          position: "left",
          label: "クイックスタート",
        },
        {
          type: "doc",
          docId: "faq",
          position: "left",
          label: "Q&A",
        },
        {
          href: "https://yomina.app",
          label: "YOMINA",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "YOMINA",
              href: "https://yomina.app/",
            },
            {
              label: "YOMINAのX",
              href: "https://x.com/YOMINA_app",
            },
            {
              label: "開発者のX",
              href: "https://x.com/kedamat99",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} YOMINA - Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
