// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://zerotier.com",
    title: "ZeroTier | Global Area Networking",
    author: `mattcoffee.com`,
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
            policy: [{userAgent: '*', allow: '/'}]
          }
        }
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "ZeroTier Homepage",
        short_name: "ZeroTier",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ff1A1A1Ae491",
        theme_color: "#fdb25d",
        icon: "src/favicon.png",
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
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        //selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
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
