import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import { theme } from "../theme.css"
import {
  Box,
  ButtonList,
  Container,
  Flex,
  SuperHeading,
  Section,
  Text,
  HeroImage,
  Space,
} from "./ui"

export default function Hero(props) {
  return (
    
    <Section style={{margin:0, padding:0}}>
    <div style={{ display: "grid"}}>
         {props.heroimage && (
         <HeroImage alt={props.heroimage.alt} image={props.heroimage.gatsbyImageData}/>
     )}
     <div
       style={{
         gridArea: "1/1",
         position: "relative",
         background: theme.colors.heroGradientLeft,
         display: "grid",
         top: "-126px",
         marginBottom: "-126px",
         height: "90vh",
         zIndex:-1,
       }}
     ></div>
     <div
       style={{
         gridArea: "1/1",
         position: "relative",
         placeItems: "center",
         display: "grid",
       }}
     >
      <Container>
        <Flex responsive varient="responsiveMedium" gap={4} >
        <Box width="half" style={{ zIndex:2}} >
            <SuperHeading as="h1">
              {props.h1}
            </SuperHeading>
            <Text variant="lead">{props.text}</Text>
            <Space size={4}/>
            <ButtonList links={props.links} variant="primary"/>
          </Box>
            {props.image && (
              <Box width="half">
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
              </Box>
            )}
        </Flex>
      </Container>
      </div>
      </div>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageHeroContent on HomepageHero {
    id
    h1: heading
    text
    links {
      id
      href
      text
    }
    heroimage {
      id
      alt
      gatsbyImageData
    }
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
