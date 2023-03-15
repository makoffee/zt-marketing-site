import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  Flex,
  Box,
  Subhead,
  ButtonList,
} from "./ui"
import { theme } from "../theme.css"


export default function Feature(props) {  
  return (
        <Flex gap={4} variant="responsive">
          <Box width="half" order={props.flip ? 1 : null} padding={4}>
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
          <Box width="half" padding={3}>
            <Subhead>
              {props.heading}
            </Subhead>
            <Box>
            <div style={{fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
            />
            </Box>
            <ButtonList links={props.links} varient="white"/>
          </Box>
        </Flex>
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
