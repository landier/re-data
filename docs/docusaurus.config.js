const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 're_data docs',
  tagline: 'data quality framework',
  url: 'https://docs.getre.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 're-data', // Usually your GitHub org/user name.
  projectName: 're-data', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 're_data',
      logo: {
        alt: 're_data logo',
        src: 'img/logo_circle.svg',
      },
      items: [
        {
          to: 'docs/introduction/whatis',
          label: 'Docs',
          position: 'left',
          activeBasePath: 'introduction'
        },
        {
          to: 'docs/getting_started/installation/for_dbt_users',
          label: 'Getting started',
          position: 'left',
          activeBasePath: 'reference'
        },
        {
          to: 'docs/reference/config',
          label: 'Reference',
          position: 'left',
          activeBasePath: 'reference'
        },
        {
          to: 'docs/qa',
          label: 'Q&A',
          position: 'left',
          activeBasePath: 'Q&A'
        },
        {
          href: 'https://github.com/re-data/re-data',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2021 ReData. All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/re-data/re-data/edit/master/docs/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-ETVVXXQ387',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
