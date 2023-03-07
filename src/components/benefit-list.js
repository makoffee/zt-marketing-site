import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Section,
  Container,
  FlexList,
  Box,
  Heading,
  Text,
  Space,
} from "./ui"
import { theme } from "../theme.css"

function Benefit(props) {
  return (
    <Box as="li" width="quarter" padding={4} paddingY={3}>
      <Box style={{padding:"0 20% 0 20%"}}>
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
          />
        )}  
      </Box>
      <Space size={2}/>
      <Heading center variant="subheadSmall">{props.heading}</Heading>
        <div style={{textAlign:"center", fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section padding={4}>
      <Container width="wide">
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>

        <FlexList gutter={4} variant="start" responsive wrap>
          {props.content.map((benefit) => (
            <Benefit key={benefit.id} {...benefit} />
          ))}
        </FlexList>
        </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      html
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
