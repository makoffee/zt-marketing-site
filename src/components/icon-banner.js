import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Text,
  Flex,
  Box,
  Icon,
} from "./ui"
import { theme } from "../theme.css"

export default function HomepageBanner(props) {
  return (
    <Container width="normal">
        <Flex style={{justifyContent: "center", padding: "0px 10px", alignItems: "center",borderRadius: "64px"}}>
          <Box style={{flex:"0 1 0"}}>
            {props.icon && (
              <Icon alt={props.icon.alt} image={props.icon.gatsbyImageData} style={{margin:"0", padding:"0"}}/>
            )}
          </Box>
          <Box right style={{flex:"1 0 500px"}}>
          <p style={{fontSize: theme.fontSizes[1], justifyContent: "center", alignItems: "center", paddingBottom:"1px"}}
              dangerouslySetInnerHTML={{
                __html: props.html,
              }}
              />
          </Box>
        </Flex>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageBannerContent on HomepageBanner {
    id
    heading
    html
    icon {
      id
      alt
      gatsbyImageData
    }
  }
`
