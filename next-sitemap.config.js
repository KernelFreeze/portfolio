/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://celestelove.dev',
    generateRobotsTxt: true,
    sitemapSize: 1000,
}
