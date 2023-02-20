import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  Text,
  Flex,
  Box,
  Icon,
  ButtonList,
} from "./ui"

export default function HomepageBanner(props) {
  return (
    <Container width="tight">
        <Flex style={{justifyContent: "center", padding: "0px 10px", alignItems: "center", lineHeight:"-3em", borderRadius: "64px"}} >
          <Box style={{flex:"0 1 0"}}>
            {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} style={{marin:"0", padding:"0"}}/>
            )}
          </Box>
          <Box style={{flex:"0 1 0"}}>
            <Text bold variant="small">
              {props.heading}
            </Text>
          </Box>
          <Box right style={{flex:"1 0"}}>
            {props.text && <Text  variant="small">{props.text}</Text>}
          </Box>
          <Box style={{flex:"0 1 150px"}}>
            <ButtonList links={props.links} varient="linkReversed"/>
          </Box>
        </Flex>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    text
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
