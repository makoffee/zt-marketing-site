import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Box,
} from "./ui"
import { theme } from "../theme.css"

export default function HomepageBanner(props) {
  return (
    <Container width="normal">
        <Box center>
          <div style={{fontSize: theme.fontSizes[1], justifyContent: "center", alignItems: "center", paddingBottom:"1px"}}
              dangerouslySetInnerHTML={{
                __html: props.html,
              }}
              />  
          </Box>
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
