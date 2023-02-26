import * as React from "react"
import { graphql } from "gatsby"
import { 
    Section,
    Container, 
    Box, 
    Subhead,
    ButtonList
} from "../components/ui"
import { theme } from "../theme.css"

export default function RichTextBlock(props) {  

    return (
        <Section>
        <Container width="normal">
            <Box padding={4} radius="large" background="muted">
              <Subhead>
                {props.title}
              </Subhead>
              <div style={{fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}
              dangerouslySetInnerHTML={{
                __html: props.html,
              }}
              />
              <ButtonList links={props.links} varient="whiteReversed"/>
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
    links {
        id
        href
        text
      }
  }
`
