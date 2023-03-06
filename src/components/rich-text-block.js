import * as React from "react"
import { graphql } from "gatsby"
import { 
    Section,
    Container, 
    Box, 
    Subhead,
    ButtonList,
} from "../components/ui"
import { theme } from "../theme.css"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    [MARKS.ITALIC]: (text) => <i className="font-italic">{text}</i>,
    [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
    [MARKS.CODE]: (text) => (
      <code>
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },

  },
}

export default function RichTextBlock(props) {  

    return (
        <Section>
        <Container width="normal">
            <Box padding={4} radius="large" background="muted">
            {props.title && (<Subhead>
                {props.title}
              </Subhead>)}
              <div style={{fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}>
                {renderRichText(props.body)}
              </div>
              {props.links && <ButtonList links={props.links} varient="whiteReversed"/>}
            </Box>
        </Container>
        </Section>
    )
  }

export const query = graphql`

  fragment RichTextBlockContent on RichTextBlock {
    id
    title
    body
    html
    links {
        id
        href
        text
      }
  }
`
