module.exports = {
  siteMetadata: {
    title: `JAME5`,
    description: `I'm a full stack web developer who likes to create unique projects using tools like JavaScript, React, Gatsby, Graphql, CSS/SCSS, Photoshop, and Node.`,
    author: ``,
    siteUrl: `https://www.jame5.co`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.jame5.co',
        sitemap: 'https://www.jame5.co/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-EZDBPHPL4N",
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photoshop`,
        path: `${__dirname}/src/photoshop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `favicon`,
        path: `${__dirname}/src/favicon`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `james5`,
        short_name: `james5`,
        start_url: `/`,
        background_color: `#111111`,
        theme_color: `#111111`,
        display: `standalone`,
        icon: `src/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
