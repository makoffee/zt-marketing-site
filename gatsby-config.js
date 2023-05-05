// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://zerotier.com",
    title: "ZeroTier | Global Area Networking",
    author: `ZeroTier, Inc.`,
    description: "Securely connect any device, anywhere. Connect team members from anywhere in the world on any device. ZeroTier creates secure networks between on-premise, cloud, desktop, and mobile devices. Starter for building homepages with Contentful",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
        // uncomment for uncomment for local image storage
        // downloadLocal: true,
        images: {
          quality: 80,
        }
      },

    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.zerotier.com',
        sitemap: 'https://www.zerotier.com/sitemap.xml',
        env: {
          development: {
            policy: [{userAgent: '*', disallow: ['/']}]
          },
          production: {
            // update this before launch
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ZeroTier Homepage",
        short_name: "ZeroTier",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ff1A1A",
        theme_color: "#fdb25d",
        icon: "src/favicon.png",
        theme_color_in_head: false,
      },
    },
    "gatsby-theme-contentful-blog",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KMKV8SF",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" },
        gtmAuth: "RLqZPgQQ-Q9NRzt2acBP7w",
        gtmPreview: "env-1",
        enableWebVitalsTracking: true,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
              resolve: "gatsby-remark-prismjs",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
    },
    // uncomment for local image storage
    //{
    //  resolve: `gatsby-source-filesystem`,
    //  options: {
    //    name: `data`,
    //    path: `${__dirname}/src/data/`,
    //    // Ignore files starting with a dot
    //    ignore: [`**/\.*`],
    //    // Use "mtime" and "inode" to fingerprint files (to check if file has changed)
    //    fastHash: true,
    //  },
    //},
  ],
}
