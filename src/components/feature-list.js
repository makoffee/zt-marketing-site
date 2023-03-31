import * as React from "react"
import { graphql } from "gatsby"
import { 
  Container, 
  Box, 
  Text, 
  Section } from "./ui"
import Feature from "./feature"

export default function FeatureList(props) {
  return (
    <Section>
    <Container width="normal">
        <Box padding={3} radius="large" background="muted">
        <Box center>
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
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
