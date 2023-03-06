import * as React from "react"
import { graphql } from "gatsby"
import { 
    Section,
    Container,
    Box,
} from "../components/ui"
import { theme } from "../theme.css"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function BlogContent(props) {  
    return (
        <Section>
        <Container width="narrow">
        <div>
        {props.image && (
          <GatsbyImage style={{ display: "grid"}}
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
          />
        )}
        {props.image && (<Box>{props.image.description}</Box>)}
        </div>
          <div style={{fontSize: theme.fontSizes[3], lineHeight: theme.lineHeights.text}}>
            {renderRichText(props.body)}
          </div>
          </Container>
        </Section>
    )
  }

export const query = graphql`

  fragment BlogContentContent on BlogContent {
    id
    name
    body
    image {
        id
        gatsbyImageData
        alt
        description
      }
  }
`
