/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jamesmitofsky.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
}
