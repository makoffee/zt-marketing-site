// For local storage of images pulled from contentful, add LocalFile interface, along with source-filesystem-plugin in gatsby-config.js
//
//  interface LocalFile implements Node {
//  id: ID!
//  alt: String @proxy(from: "title")
//  childImageSharp: GatsbyImageData @imagePassthroughArgs
//  url: String
//  file: JSON
//  title: String
// }


const { documentToHtmlString } = require("@contentful/rich-text-html-renderer")
const { getGatsbyImageResolver } = require("gatsby-plugin-image/graphql-utils")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          return source.internal.type.replace("Contentful", "")
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "imagePassthroughArgs",
    extend(options) {
      const { args } = getGatsbyImageResolver()
      return {
        args,
      }
    },
  })

  actions.createFieldExtension({
    name: "imageUrl",
    extend(options) {
      const schemaRE = /^\/\//
      const addURLSchema = (str) => {
        if (schemaRE.test(str)) return `https:${str}`
        return str
      }
      return {
        resolve(source) {
          return addURLSchema(source.file.url)
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

// converts Rich Text content types with an ID of body into parsed raw html from JSON

  actions.createFieldExtension({
    name: "richText",
    extend(options) {
      return {
        resolve(source, args, context, info) {
          const body = source.body
          const doc = JSON.parse(body.raw)
          const html = documentToHtmlString(doc)
          return html
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "contentfulCode",
    extend(options) {
      return {
        async resolve(source, args, context, info) {
          const type = info.schema.getType(source.internal.type)
          const resolver = type.getFields().contentfulCode?.resolve
          const result = await resolver(source, args, context, {
            fieldName: "contentfulCode",
          })
          return result.code
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }
    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }
    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }
    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }
    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData @imagePassthroughArgs
      url: String
      description: String
    }

    interface HomepageHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      subhead: String
      image: HomepageImage
      heroimage: HomepageImage
      text: String
      links: [HomepageLink]
    }
    interface HomepageFeature implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      html: String!
      image: HomepageImage
      links: [HomepageLink]
    }
    interface HomepageFeatureList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      content: [HomepageFeature]
    }
    interface HomepageCta implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }
    interface TextBanner implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      html: String!
      icon: HomepageImage
    }
    interface VideoEmbed implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      title: String
      description: String
      src: String
    }
    interface HomepageLogo implements Node {
      id: ID!
      image: HomepageImage
      alt: String
    }
    interface HomepageLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      logos: [HomepageLogo]
    }
    interface HomepageTestimonial implements Node {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage
    }
    interface HomepageTestimonialList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      content: [HomepageTestimonial]
    }
    interface AccordionItem implements Node {
      id: ID!
      title: String
      body: JSON
    }
    interface AccordionList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      content: [AccordionItem]
    }
    interface HomepageBenefit implements Node {
      id: ID!
      heading: String
      text: String
      html: String!
      cta: HomepageLink
      varient: String
      image: HomepageImage
    }
    interface HomepageBenefitList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      width: String
      content: [HomepageBenefit]
    }
    interface HomepageProduct implements Node {
      id: ID!
      heading: String
      text: String
      productFeature1: String
      productFeature2: String
      productFeature3: String
      productFeature4: String
      productFeature5: String
      variant: String
      image: HomepageImage
      links: [HomepageLink]
    }
    interface HomepageProductList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      content: [HomepageProduct]
    }
    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }
    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
      login: HomepageLink
    }
    enum SocialService {
      TWITTER
      FACEBOOK
      INSTAGRAM
      YOUTUBE
      LINKEDIN
      GITHUB
      DISCORD
      TWITCH
    }
    interface SocialLink implements Node {
      id: ID!
      username: String!
      service: SocialService!
    }
    interface LayoutFooter implements Node {
      id: ID!
      tagline: String
      links: [HomepageLink]
      navItems: [HeaderNavItem]
      meta: [HomepageLink]
      socialLinks: [SocialLink]
      copyright: String
    }
    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface AboutPage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }
    interface AboutHero implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
    }
    interface AboutStat implements Node {
      id: ID!
      value: String
      label: String
    }
    interface AboutStatList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      content: [AboutStat]
    }
    interface AboutProfile implements Node {
      id: ID!
      image: HomepageImage
      name: String
      jobTitle: String
    }
    interface AboutLeadership implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      subhead: String
      content: [AboutProfile]
    }
    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }
    interface LandingPage implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }
    interface BlogContent implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      name: String
      body: JSON
      image: HomepageImage
    }
    interface CodeBlock implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      name: String
      code: String!
      language: String
    }

    type contentfulCodeBlockTextNode implements Node {
      id: ID!
      code: String!
      # determine if markdown is required for this field type
    }

    interface RichTextBlock implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      title: String
      body: JSON
      html: String!
      links: [HomepageLink]
    }
    interface CtaImageBlock implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
      image: HomepageImage
      icon: HomepageImage
      links: [HomepageLink]
    }
    interface HeaderBanner implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String!
      heroimage: HomepageImage
      text: String
      links: [HomepageLink]
    }
    interface EmailSignupBlock implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      text: String
    }

  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type ContentfulHomepageLink implements Node & HomepageLink @dontInfer {
      id: ID!
      href: String
      text: String
    } 
    type ContentfulNavItem implements Node & NavItem & HeaderNavItem
      @dontInfer {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(from: "icon___NODE")
      description: String
    }
    type ContentfulNavItemGroup implements Node & NavItemGroup & HeaderNavItem
      @dontInfer {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link(from: "navItems___NODE")
    }
    type ContentfulAsset implements Node & HomepageImage & Image {
      id: ID!
      alt: String @proxy(from: "title")
      gatsbyImageData: GatsbyImageData
      url: String @imageUrl
      file: JSON
      title: String
    }
    type ContentfulHomepageHero implements Node & HomepageHero & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String!
      subhead: String
      image: HomepageImage @link(from: "image___NODE")
      heroimage: HomepageImage @link(from: "heroimage___NODE")
      text: String
      links: [HomepageLink] @link(from: "links___NODE")
    }
    type ContentfulHeaderBanner implements Node & HeaderBanner & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String!
      image: HomepageImage @link(from: "image___NODE")
      heroimage: HomepageImage @link(from: "heroimage___NODE")
      text: String
      links: [HomepageLink] @link(from: "links___NODE")
    }
    type ContentfulEmailSignupBlock implements Node & EmailSignupBlock & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
    }
    type ContentfulHomepageFeature implements Node & HomepageBlock & HomepageFeature
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      html: String! @richText
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }
    type ContentfulHomepageFeatureList implements Node & HomepageBlock & HomepageFeatureList
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      text: String
      content: [HomepageFeature] @link(from: "content___NODE")
    }
    type ContentfulHomepageCta implements Node & HomepageBlock & HomepageCta
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }
    type ContentfulTextBanner implements Node & HomepageBlock & TextBanner
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      html: String! @richText
      icon: HomepageImage @link(from: "icon___NODE")
    }
    type ContentfulVideoEmbed implements Node & HomepageBlock & VideoEmbed
      @dontInfer {
      blocktype: String @blocktype
      title: String
      description: String
      src: String
    }
    type ContentfulHomepageLogo implements Node & HomepageLogo @dontInfer {
      id: ID!
      image: HomepageImage @link(from: "image___NODE")
      alt: String
    }
    type ContentfulHomepageLogoList implements Node & HomepageBlock & HomepageLogoList
      @dontInfer {
      blocktype: String @blocktype
      text: String
      logos: [HomepageLogo] @link(from: "logos___NODE")
    }
    type ContentfulHomepageTestimonial implements Node & HomepageTestimonial
      @dontInfer {
      id: ID!
      quote: String
      source: String
      avatar: HomepageImage @link(from: "avatar___NODE")
    }
    type ContentfulHomepageTestimonialList implements Node & HomepageBlock & HomepageTestimonialList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      content: [HomepageTestimonial] @link(from: "content___NODE")
    }
    type ContentfulAccordionItem implements Node & AccordionItem
      @dontInfer {
      id: ID!
      title: String
      body: JSON
    }
    type ContentfulAccordionList implements Node & HomepageBlock & AccordionList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      content: [AccordionItem] @link(from: "content___NODE")
    }
    type ContentfulHomepageBenefit implements Node & HomepageBenefit
      @dontInfer {
      id: ID!
      heading: String
      text: String
      html: String! @richText
      varient: String
      cta: HomepageLink @link(from: "cta___NODE")
      image: HomepageImage @link(from: "image___NODE")
    }
    type ContentfulHomepageBenefitList implements Node & HomepageBlock & HomepageBenefitList
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      width: String
      content: [HomepageBenefit] @link(from: "content___NODE")
    }
    type ContentfulHomepageProduct implements Node & HomepageProduct
      @dontInfer {
      heading: String
      text: String
      productFeature1: String
      productFeature2: String
      productFeature3: String
      productFeature4: String
      productFeature5: String
      variant: String
      image: HomepageImage @link(from: "image___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }
    type ContentfulHomepageProductList implements Node & HomepageProductList & HomepageBlock
      @dontInfer {
      blocktype: String @blocktype
      heading: String
      text: String
      content: [HomepageProduct] @link(from: "content___NODE")
    }
    type ContentfulHomepage implements Node & Homepage @dontInfer {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }
  `)

  // Custom CTA with image block type
  actions.createTypes(/* GraphQL */ `
      type ContentfulCtaImageBlock implements Node & HomepageBlock & CtaImageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
      icon: HomepageImage @link(from: "icon___NODE")
      links: [HomepageLink] @link(from: "links___NODE")
    }
`)

  // Custom rich text block type
  actions.createTypes(/* GraphQL */ `
  type ContentfulRichTextBlock implements Node & RichTextBlock & HomepageBlock
    @dontInfer {
    id: ID!
    blocktype: String @blocktype
    title: String
    html: String! @richText
    body: JSON
    links: [HomepageLink] @link(from: "links___NODE")
  }
`)

// Custom rich text content area for blog posts
  actions.createTypes(/* GraphQL */ `
  type ContentfulBlogContent implements Node & BlogContent & HomepageBlock
    @dontInfer {
    id: ID!
    blocktype: String @blocktype
    name: String
    body: JSON
    image: HomepageImage @link(from: "image___NODE")
  }
`)

// Custom rich text content area for code blocks
actions.createTypes(/* GraphQL */ `
type ContentfulCodeBlock implements Node & CodeBlock & HomepageBlock
  @dontInfer {
  id: ID!
  blocktype: String @blocktype
  name: String
  language: String
  contentfulCode: contentfulCodeBlockTextNode
        @link(from: "code___NODE")
  code: String! @contentfulCode
}
`)

  // CMS specific types for About page
  actions.createTypes(/* GraphQL */ `
    type ContentfulAboutHero implements Node & AboutHero & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      text: String
      image: HomepageImage @link(from: "image___NODE")
    }
    type ContentfulAboutStat implements Node & AboutStat @dontInfer {
      id: ID!
      value: String
      label: String
    }
    type ContentfulAboutStatList implements Node & AboutStatList & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      content: [AboutStat] @link(from: "content___NODE")
    }
    type ContentfulAboutProfile implements Node & AboutProfile @dontInfer {
      id: ID!
      image: HomepageImage @link(from: "image___NODE")
      name: String
      jobTitle: String
    }
    type ContentfulAboutLeadership implements Node & AboutLeadership & HomepageBlock
      @dontInfer {
      id: ID!
      blocktype: String @blocktype
      heading: String
      subhead: String
      content: [AboutProfile] @link(from: "content___NODE")
    }
    type ContentfulAboutPage implements Node & AboutPage @dontInfer {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }
  `)

  // Layout types
  actions.createTypes(/* GraphQL */ `
    type ContentfulLayoutHeader implements Node & LayoutHeader @dontInfer {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems___NODE")
      cta: HomepageLink @link(from: "cta___NODE")
      login: HomepageLink @link(from: "login___NODE")
    }
    type ContentfulSocialLink implements Node & SocialLink @dontInfer {
      id: ID!
      username: String!
      service: SocialService!
    }
    type ContentfulLayoutFooter implements Node & LayoutFooter @dontInfer {
      id: ID!
      tagline: String
      links: [HomepageLink] @link(from: "links___NODE")
      meta: [HomepageLink] @link(from: "meta___NODE")
      navItems: [HeaderNavItem] @link(from: "navItems___NODE")
      socialLinks: [SocialLink] @link(from: "socialLinks___NODE")
      copyright: String
    }
    type ContentfulLayout implements Node & Layout @dontInfer {
      id: ID!
      header: LayoutHeader @link(from: "header___NODE")
      footer: LayoutFooter @link(from: "footer___NODE")
    }
  `)

  // Page types
  actions.createTypes(/* GraphQL */ `
    type ContentfulPage implements Node & Page {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      html: String! @richText
    }
  `)
  // LandingPage types
  actions.createTypes(/* GraphQL */ `
    type ContentfulLandingPage implements Node & LandingPage @dontInfer {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage @link(from: "image___NODE")
      content: [HomepageBlock] @link(from: "content___NODE")
    }
  `)
}

exports.createPages = ({ actions }) => {
  const { createSlice } = actions
  createSlice({
    id: "header",
    component: require.resolve("./src/components/header.js"),
  })
  createSlice({
    id: "footer",
    component: require.resolve("./src/components/footer.js"),
  })
}