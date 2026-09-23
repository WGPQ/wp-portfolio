/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://williampuma.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  autoLastmod: false,
  transform: async (_config, path) => ({
    loc: path,
    changefreq: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }),
};
