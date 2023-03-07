import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Heading,
  Flex,
  Box,
  FlexList,
  Blockquote,
  Text,
  Avatar,
  Space,
} from "./ui"

function Testimonial(props) {
  return (
    <Flex variant="start" responsive>
      {props.avatar && (
        <Avatar alt={props.avatar.alt} image={props.avatar.gatsbyImageData} />
      )}
      <Blockquote>
        <Text as="p" variant="lead">
          {props.quote}
        </Text>
        <figcaption>
          <Text as="cite" bold variant="caps">
            {props.source}
          </Text>
        </figcaption>
      </Blockquote>
    </Flex>
  )
}

export default function TestimonialList(props) {
  return (
    <Section>
      <Container width="narrow">
        <Box center>
          <Heading>
            {props.heading}
          </Heading>
        </Box>
        <Space size={4} />
        <FlexList variant="start" responsive wrap>
          {props.content.map((testimonial, index) => (
            <Box as="li" key={testimonial.id + index}  padding={4} radius="large" style={{backgroundImage: "linear-gradient(133deg, #fdb25d, #4436ca)", marginBottom: "40px"}}>
              <Testimonial {...testimonial} />
            </Box>
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
