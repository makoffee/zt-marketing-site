import * as React from "react"
import { graphql } from "gatsby"
import { 
  Container, 
  Box, 
  Subhead,
  Text, 
  Section } from "./ui"
import Feature from "./feature"
import { theme } from "../theme.css"

export default function FeatureList(props) {
  return (
    <Section>
    <Container width="normal">
        <Box padding={3} radius="large" background="muted">
        <Box center paddingY={4}>
          <Subhead as="h2" style={{color: theme.colors.primary}}>
            {props.heading}
          </Subhead>
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
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
