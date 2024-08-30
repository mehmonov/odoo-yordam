// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Odoo haqida o\'zbekcha blog',
  tagline: 'Inglizchada allaqachon ma\'lumot ko\'p. Keling o\'zbek tilida o\'qiymiz',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://odoo-help.uz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mehmonov/', // Usually your GitHub org/user name.
  projectName: 'odoo-help', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mehmonov/odoo-help',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mehmonov/odoo-help',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: 'Odoo o\'zbekcha',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Qo\'llanma',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mehmonov/odoo-help',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Darsliklar',
            items: [
              {
                label: "Qo'llanma",
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Ijtimoiy tarmoqlar',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/odooUzbekistanCommunity',
              },
            
            ],
          },
          {
            title: 'Qo\'shimcha',
            items: [
              {
                label: 'Aloqa',
                href: 'https://t.me/Mehmonovhusniddin',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mehmonov/odoo-help',
              },
            ],
          },
        ],
        copyright: `Muallif © ${new Date().getFullYear()} Xalq. Bosh rolda Husniddin.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "02134f22134f47229a6278f0b0ece290"}',
    },
  ],
};

export default config;
