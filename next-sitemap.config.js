/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://williampuma.dev",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  autoLastmod: false,
  transform: async (_config, path) => {
    if (path !== "/" && path !== "/es") return null;
    return {
      loc: path,
      changefreq: "monthly",
      priority: path === "/" ? 1 : 0.8,
      alternateRefs: [
        { href: "https://williampuma.dev/", hreflang: "en", hrefIsAbsolute: true },
        { href: "https://williampuma.dev/es", hreflang: "es", hrefIsAbsolute: true },
        { href: "https://williampuma.dev/", hreflang: "x-default", hrefIsAbsolute: true },
      ],
    };
  },
};
