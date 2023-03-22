import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Heading,
  Subhead,
  Box,
  Icon,
  ButtonList,
  Space,
} from "./ui"
import { theme } from "../theme.css"

function Product(props) {
  return (
    
    <Box center paddingY={4} padding={3} radius="large" background="muted" border={props.variant}>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Subhead>{props.heading}</Subhead>  
      <Text bold>{props.text}</Text>
      <div style={{fontSize: theme.fontSizes[1], lineHeight: theme.lineHeights.text}}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
            />
      <Space size={2}/>
      <ButtonList links={props.links} varient={props.variant}/>
     
    </Box>
  )
}

export default function ProductList(props) {
  return (
    <Section id="pricing">
      <Container >
        <Box center paddingY={4}>
          <Heading>
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={4} variant="stretchMediumResponsive">
          {props.content.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    heading
    text
    content {
      id
      heading
      text
      html
      variant
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`