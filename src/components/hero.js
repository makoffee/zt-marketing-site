import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

import * as React from "react"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Section,
  Subhead,
  Text,
  HeroImage,
} from "./ui"

const heroBackground = "https://images.ctfassets.net/upz5g6ntpb42/2QVWGJXNiMv0bqKDWAUj64/bec3f1eab0539d71ea9d7688e42f1f32/global-network-blue.jpg"

export default function Hero(props) {
  return (
    
   // <Section style={{ backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', paddingTop:"0px"}}>
   <Section>
      {props.heroimage && (
            <HeroImage alt={props.heroimage.alt} image={props.heroimage.gatsbyImageData}/>
          )}
      <Container>
        <Flex gap={4} variant="responsive">
        <Box width="half" style={{ zIndex:2}}>
            <Heading as="h1">
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.subhead}</Subhead>
            <Text as="p">{props.text}</Text>
            <ButtonList links={props.links} varient="primary"/>
          </Box>
          <Box width="half">
            {props.image && (
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            )}
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    h1: heading
    subhead
    text
    links {
      id
      href
      text
    }
    heroimage {
      id
      gatsbyImageData
      alt
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
