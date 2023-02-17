import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Text,
  Kicker,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
  Nudge,
} from "./ui"

export default function CtaImageBlock(props) {
  return (

    <Container width="normal">
      <Section padding={5} radius="large" background="active">
        <Flex responsive variant="verticalCenter">
          <Box width="half">
            {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />
            )}
            <Heading>
              {props.kicker && <Kicker>{props.kicker}</Kicker>}
              {props.heading}
            </Heading>
            {props.text && <Text variant="lead">{props.text}</Text>}
            <ButtonList links={props.links} reversed />
          </Box>
          <Box width="half" padding={5}>
            {props.image && (
              <Nudge right={5} bottom={5}>
                <GatsbyImage
                  alt={props.image.alt}
                  image={getImage(props.image.gatsbyImageData)}
                />
              </Nudge>
            )}
          </Box>
        </Flex>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment CtaImageBlockContent on CtaImageBlock {
    id
    kicker
    heading
    text
    image {
      id
      alt
      gatsbyImageData
    }
    icon {
      id
      alt
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
