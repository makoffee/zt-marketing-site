import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  FlexList,
  Box,
  Heading,
  Text,
  Space,
} from "./ui"

function Benefit(props) {
  return (
    <Box as="li" width="quarter" padding={4} paddingY={3}>
      {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            responsive
            //className={styles.aboutHeroImage}
          />
        )}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      <div style={{}}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
            />
    </Box>
  )
}

export default function BenefitList(props) {
  return (
    <Section>
      <Container width="wide">
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        <Space size={3} />
        <FlexList gutter={3} variant="start" responsive wrap>
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
