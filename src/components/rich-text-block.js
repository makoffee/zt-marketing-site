import * as React from "react"
import { graphql } from "gatsby"
import { 
    Section,
    Container, 
    Box, 
    Subhead,
} from "../components/ui"

export default function RichTextBlock(props) {  

    return (
        <Section>
        <Container width="normal">
            <Box padding={4} radius="large" background="muted">
              <Subhead>
                {props.title}
              </Subhead>
              <div style={{fontSize: "18px"}}
              dangerouslySetInnerHTML={{
                __html: props.html,
              }}
              />
            </Box>
        </Container>
        </Section>
    )
  }

export const query = graphql`
  fragment RichTextBlockContent on RichTextBlock {
    id
    title
    html
  }
`
