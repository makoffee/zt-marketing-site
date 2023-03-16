import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Text,
  Heading,
  Flex,
  Box,
  Icon,
  ButtonList,
} from "./ui"

export default function CtaImageBlock(props) {
  return (

    <Container width="normal">
      <Section padding={4} radius="large" background="active">
        <Flex responsive variant="verticalCenter">
          <Box width="half" paddingY={4}>
            {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} />
            )}
            <Heading>
              {props.heading}
            </Heading>
            {props.text && <Text variant="lead">{props.text}</Text>}
            <ButtonList links={props.links} reversed />
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
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment CtaImageBlockContent on CtaImageBlock {
    id
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
