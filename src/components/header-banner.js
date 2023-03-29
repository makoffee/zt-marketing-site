import { graphql } from "gatsby"
import * as React from "react"
import { getImage } from "gatsby-plugin-image"
import { theme } from "../theme.css"
import {
  Box,
  ButtonList,
  Container,
  Heading,
  Subhead,
  Section,
  BannerImage,
} from "./ui"

export default function Hero(props) {
  return (
   <Section>
     <div style={{ display: "grid"}}>
          {props.heroimage && (
          <BannerImage alt={props.heroimage.alt} image={getImage(props.heroimage.gatsbyImageData)}/>
      )}
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
        }}
      >
      <Container>
        <Box width="full" style={{ zIndex:2}} center>
            <Heading as="h1">
              {props.h1}
            </Heading>
            <Subhead as="h2">{props.text}</Subhead>
            <ButtonList links={props.links} varient="primary"/>
          </Box>
      </Container>
      </div>
      </div>
    </Section>
  )
}

export const query = graphql`
  fragment HeaderBannerContent on HeaderBanner {
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
      gatsbyImageData
      alt
    }
  }
`
