/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/configuration',
        'getting-started/run-on-local-server',
        'getting-started/run-on-live-server',
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      collapsed: false,
      items: [
        'modules/dashboard',
        {
          type: 'category',
          label: 'E-commerce',
          collapsed: false,
          items: [
            'modules/products',
            'modules/categories',
          ],
        },
        'modules/orders',
        'modules/promo-codes',
        'modules/analytics',
        'modules/notifications',
        {
          type: 'category',
          label: 'Staff',
          collapsed: false,
          items: ['modules/roles-permissions', 'modules/team'],
        },
        {
          type: 'category',
          label: 'Blog',
          collapsed: false,
          items: ['modules/blogs', 'modules/blog-categories'],
        },
        'modules/settings',
      ],
    },
  ],
};

module.exports = sidebars;