/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jamesm.it',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    // Get all blog posts
    const posts = require('fs').readdirSync('./posts')
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));

    return posts.map(post => ({
      loc: `/blog/${post}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }));
  },
}
