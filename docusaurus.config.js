// @ts-check

const {themes} = require('prism-react-renderer');
const docsData = require('./docsData');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: docsData.brand.docsTitle,
  tagline: docsData.brand.docsTagline,
  favicon: docsData.brand.faviconPath,

  future: {
    v4: true,
  },

  url: docsData.links.docsWebsiteUrl,
  baseUrl: '/',

  organizationName: docsData.repo.organizationName,
  projectName: docsData.repo.projectName,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    ...docsData,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          editUrl: undefined,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: docsData.seo.socialImage,
    metadata: [
      {
        name: 'description',
        content: docsData.seo.metaDescription,
      },
      {
        name: 'keywords',
        content: docsData.seo.keywords.join(', '),
      },
      {
        property: 'og:description',
        content: docsData.seo.metaDescription,
      },
      {
        property: 'og:title',
        content: docsData.brand.docsTitle,
      },
    ],

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      hideOnScroll: true,
      title: docsData.brand.name,
      logo: {
        alt: docsData.brand.name,
        src: docsData.brand.logoPath,
      },
      items: [],
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },

    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  },
};

module.exports = config;
