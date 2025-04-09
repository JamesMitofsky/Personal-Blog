/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.jamesm.it',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
  exclude: ['/tag', '/tag/*'],
  additionalPaths: async (config) => {
    // Get all posts
    const posts = require('fs').readdirSync('./posts')
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));

    return posts.map(post => ({
      loc: `/posts/${post}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }));
  },
}
