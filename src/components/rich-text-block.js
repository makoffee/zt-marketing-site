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
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1>
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => {
      <h2>
        {children}
      </h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3>
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4>
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5>
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6>
        {children}
      </h6>
    ),

    [BLOCKS.OL_LIST]: (node, children) => (
      <ol>{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul>{children}</ul>
    ),

    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li>{children}</li>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content[0].value === '') {
        return <br />
      } else {
        return <p>{children}</p>
      }
    },
    [BLOCKS.QUOTE]: (children) => (
      <blockquote>
        <>"{children.content[0].content[0].value}"</>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const {gatsbyImageData, description} = node.data.target.sys
            return (
                <div className="contentimg">
                    <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
                </div>
            )
        }, 
  },
}

export default function RichTextBlock(props) {  

    return (
        <Section>
        <Container width="normal">
            <Box padding={4} radius="large" background="muted">
              <Subhead>
                {props.title}
              </Subhead>
              <div style={{fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}>
                {renderRichText(props.body, options)}
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
