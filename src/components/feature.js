import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown";

import {
  Container,
  Section,
  Flex,
  Box,
  Subhead,
  Text,
  ButtonList,
} from "./ui"


export default function Feature(props) {  
  return (
    <Section padding={4} background="muted">
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half">
            <Subhead>
              {props.heading}
            </Subhead>
            <div style={{fontSize: "22px"}}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
            />
            <ButtonList links={props.links} varient="white"/>
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}


export const query = graphql`
  fragment HomepageFeatureContent on HomepageFeature {
    id
    heading
    text
    html 
    
    links {
      id
      href
      text
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
  
`
