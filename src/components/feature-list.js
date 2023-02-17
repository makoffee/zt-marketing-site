import * as React from "react"
import { graphql } from "gatsby"
import { Container, Box, Heading, Text, Section } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Section>
    <Container width="normal">
        <Box padding={3} radius="large" background="muted">
        <Box center paddingY={4}>
          <Heading>
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((feature, i) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
