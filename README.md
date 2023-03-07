<a href="https://www.zerotier.com">
  <img alt="Gatsby" src="https://github.com/makoffee/zerotier/blob/main/src/favicon.png" width="60" />
</a>

# ZeroTier Marketing Site

Built using Gatsby and Contentful (React.js / Node.js / GraphQL / TypeScript / Vanilla-Extract CSS).

## Quick start

You will need a new or to connect to the existing ZeroTier [Contentful space][] to use this theme and will need the [Space ID][], [Content Management API Key][] (also referred to as a Personal Access Token) and [Content Delivery API Key][] during setup for local development.

[contentful space]: https://www.contentful.com/help/contentful-101/#step-2-create-a-space
[space id]: https://www.contentful.com/help/find-space-id/
[content delivery api key]: https://www.contentful.com/developers/docs/references/authentication/#api-keys-in-the-contentful-web-app
[content management api key]: https://www.contentful.com/developers/docs/references/authentication/#the-content-management-api

1. **Install Yarn**

   It is recommended to install Yarn through the npm package manager, which comes bundled with Node.js when you install it on your system.

   ```sh
   npm install --global yarn
   ```

1. **Clone zerotier-marketing-site from GitHub**

   ```sh
    git clone git@github.com:zerotier/zerotier-marketing-site
   ```

1. **Add Environment Variables**
  You will need to create two hidden files in the root of your project ".env.development" and ".env.production" that will contain your CONTENTFUL_SPACE_ID & CONTENTFUL_ACCESS_TOKEN.  Keep these private, and out of source control.

Add the following to both.

  ```
    # All environment variables will be sourced
    # and made available to gatsby-config.js, gatsby-node.js, etc.
    # Do NOT commit this file to source control
    CONTENTFUL_SPACE_ID='XXXXXXXXXXXX'
    CONTENTFUL_ACCESS_TOKEN='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  ```

1. **Install build dependencies**

   In your site directory, run the yarn install script.  There will be warnings, you may need to install some packages manually with implicet versions.

   ```sh
   yarn install
   ```
1. **Start Developing**

   ```sh
   yarn develop
   ```

   Your local development site should now be running at <http://localhost:8000>

   For testing GraphQL


## Deploying the site

Once your content is available in Contentful and you have a working local build you would like to deploy.  You can now deploy your site to [Vercel](https://vercel.com):

1. Push your local site a new branch [dev] on GitHub.  You will now be able to view a preview build on Vercel.
1. Merge the brange with [main].  !!! Merging will trigger a prodution build, so be sure to debug and test before deploying.

Previews of the dev branch can be viewed at: [https://zerotier-dev.vercel.app/](https://zerotier-dev.vercel.app/)
Note you must be logged into [Vercel](https://vercel.com) to view preview builds.

Production builds are available at: [https://zerotier-production.vercel.app/](https://zerotier-production.vercel.app/)


## What's included?

```sh
├── README.md
├── gatsby-config.js
├── gatsby-node.js
├── src
│   ├── components
│   ├── pages
│   ├── colors.css.ts
│   ├── styles.css.ts
│   └── theme.css.ts
└── .env.EXAMPLE
```

1. **`gatsby-config.js`**: [Gatsby config][] file that includes plugins required for this starter.
1. **`gatsby-node.js`**: [Gatsby Node][] config file that creates an abstract data model for the homepage content.
1. **`src/`**: The source directory for the starter, including pages, components, and [Vanilla Extract][] files for styling.

[gatsby config]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[gatsby node]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
[vanilla extract]: https://vanilla-extract.style/

## How to

### Update the color theme

To update the colors used in this starter, edit the `src/colors.css.ts` file.

```.ts
// src/colors.css.ts
export const colors = {
  background: "#ffd500",
  text: "#005bbb",
  primary: "#005bbb",
  muted: "#f5cc00",
  active: "#004287",
  black: "#000",
}

```

If you'd like to add additional colors, add additional keys to this object.
This file is imported into `src/theme.css.ts` and creates CSS custom properties, that can be imported and used in other `.css.ts` files.

The UI components file `src/components/ui.js` imports styles from `src/components/ui.css.ts`. You can see how the theme and color values are being used in this file.

### Customize headings, buttons, and other styles

To further customize the look and feel of the homepage, edit the UI components in `src/components/ui.js` and styles in `src/components/ui.css.ts`.

### Customize section components

To customize any of the sections of the homepage, edit the relevant component in `src/components`.
Most of the styles for these components are handled with shared UI components in `src/components/ui.js`.

### Create custom section components

To create a new type of section in your homepage, you'll want to create a new section component, using the existing components as an example.
For this example, we'll create a new "Banner" component.

1. First, update your content model in Contentful

   1. In your Contentful space, create a new content type and call it "Homepage Banner."

      <img src="./docs/images/step-1.png" alt="Step 1" width="300" />

   1. For this example, add two fields to your new content type: `heading` and `text` – these can be _Short text_ types.

      <img src="./docs/images/step-2.png" alt="Step 2" width="300" />
      <img src="./docs/images/step-3.png" alt="Step 3" width="300" />
      <img src="./docs/images/step-4.png" alt="Step 4" width="300" />

   1. Find the content type for _Homepage_ in Contentful and edit the settings for the _Content_ field. Under _Validation_, ensure that the new _Homepage Banner_ type is checked to make it available as a content type on the Homepage.

      <img src="./docs/images/step-5.png" alt="Step 5" width="500" />
      <img src="./docs/images/step-6.png" alt="Step 6" width="500" />
      <img src="./docs/images/step-7.png" alt="Step 7" width="500" />

   1. Navigate to the _Content_ tab to edit the _Homepage_ and add a section with this new _Homepage Banner_ content type.

      <img src="./docs/images/step-8.png" alt="Step 8" width="500" />
      <img src="./docs/images/step-9.png" alt="Step 9" width="500" />

1. Update `gatsby-node.js`

   Edit your site's `gatsby-node.js` file, adding an interface for `HomepageBanner` that matches your content model in Contentful.
   This allows the homepage to query the abstract `HomepageBanner` type.

   ```js
   // in gatsby-node.js
   exports.createSchemaCustomization = async ({ actions }) => {
     // ...
     actions.createTypes(`
       interface HomepageBanner implements Node & HomepageBlock {
         id: ID!
         blocktype: String
         heading: String
         text: String
       }
     `)
     // ...
     actions.createTypes(`
       type ContentfulHomepageBanner implements Node & HomepageBanner & HomepageBlock @dontInfer {
         id: ID!
         blocktype: String @blocktype
         heading: String
         text: String
       }
     `)
     // ...
   }
   ```

1. Next, create the Banner component:

   ```jsx fileExt
   // src/components/banner.js
   import * as React from "react"
   import { graphql } from "gatsby"
   import { Section, Container, Heading, Text } from "./ui"

   export default function Banner(props) {
     return (
       <Section>
         <Container>
           <Heading>{props.heading}</Heading>
           <Text>{props.text}</Text>
         </Container>
       </Section>
     )
   }

   export const query = graphql`
     fragment HomepageBannerContent on HomepageBanner {
       id
       heading
       text
     }
   `
   ```

1. Export the component from `src/components/sections.js`

   ```js fileExt
   // src/components/sections.js
   export { default as HomepageHero } from "./hero"
   export { default as HomepageFeature } from "./feature"
   export { default as HomepageFeatureList } from "./feature-list"
   export { default as HomepageLogoList } from "./logo-list"
   export { default as HomepageBenefitList } from "./benefit-list"
   export { default as HomepageTestimonialList } from "./testimonial-list"
   export { default as HomepageStatList } from "./stat-list"
   export { default as HomepageCta } from "./cta"
   export { default as HomepageProductList } from "./product-list"

   // add export for new component
   export { default as HomepageBanner } from "./banner"
   ```

1. Add the GraphQL query fragment to the query in `src/pages/index.js`

   ```js fileExt
   // in src/pages/index.js
   export const query = graphql`
     {
       homepage {
         id
         title
         description
         image {
           id
           url
         }
         blocks: content {
           id
           blocktype
           ...HomepageHeroContent
           ...HomepageFeatureContent
           ...HomepageFeatureListContent
           ...HomepageCtaContent
           ...HomepageLogoListContent
           ...HomepageTestimonialListContent
           ...HomepageBenefitListContent
           ...HomepageStatListContent
           ...HomepageProductListContent
           # New component fragment
           ...HomepageBannerContent
         }
       }
     }
   `
   ```

## Troubleshooting

### Errors after making changes to the schema

If you've made changes to the `gatsby-node.js` file or changes to the Contentful data model, clear the Gatsby cache before running the develop server:

```sh
yarn clean && yarn start
```

---

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).**