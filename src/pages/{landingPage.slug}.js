import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function LandingPage(props) {
  const { landingPage } = props.data

  return (
    <Layout>
      {landingPage.blocks && landingPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { landingPage } = props.data
  return <SEOHead {...landingPage} />
}
export const query = graphql`
  query LandingPageContent($id: String!) {
    landingPage(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageHeroContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageLogoListContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...HeaderBannerContent
        ...RichTextBlockContent
        ...CtaImageBlockContent
        ...TextBannerContent
        ...EmailSignupBlockContent
        ...VideoEmbedContent
      }
    }
  }
`

