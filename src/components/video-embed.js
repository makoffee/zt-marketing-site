import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Box,
} from "./ui"

export default function VideoEmbed(props) {
  return (
    <Container width="normal">
      <Box center>
        <div className="video" style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
        }}>
          <iframe
            style={{
                position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                width: "100%",
                height: "100%",
            }}
            src={props.src}
            title={props.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment VideoEmbedContent on VideoEmbed {
    id
    title
    src
  }
`
