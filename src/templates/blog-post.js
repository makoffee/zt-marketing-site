import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
  Section,
  BannerImage,
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { theme } from "../theme.css"

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
    [BLOCKS.HR]: () => <hr/>,
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

export default function BlogPost(props) {
  return (
    <Layout>
      <Section>
      <div style={{ display: "grid"}}>
          {props.image.gatsbyImageData && (
          <BannerImage alt={props.image.alt} image={getImage(props.image.gatsbyImageData)}/>
      )}
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          placeItems: "center",
          display: "grid",
          background: theme.colors.headerGradient,
        }}
      >
      <Container>
        <Box width="full" style={{ zIndex:2}} center>
        <Heading as="h1" center>
            {props.title}
          </Heading>
          <Space size={2} />
          {props.author && (
            <Box center>
              <Flex>
                {props.author.avatar &&
                  (!!props.author.avatar.gatsbyImageData ? (
                    <Avatar
                      {...props.author.avatar}
                      image={props.author.avatar.gatsbyImageData}
                    />
                  ) : (
                    <img
                      src={props.author.avatar.url}
                      alt={props.author.name}
                      className={avatarStyle}
                    />
                  ))}
                <Text variant="bold">{props.author.name}</Text>
              </Flex>
            </Box>
          )}
          <Space size={2} />
          <Text center>{props.date}</Text>
        </Box>
      </Container>
      </div>
      </div>
    </Section>
      <Container>
        <Box>
          <Space size={5} />
          <Container width="narrow">
          <div style={{fontSize: theme.fontSizes[3], lineHeight: theme.lineHeights.text}}>
            {renderRichText(props.body, options)}
          </div>
          </Container>
        </Box>
        <Box>
        {props.blocks && props.blocks.map((block) => {
            const { id, blocktype, ...componentProps } = block
            const Component = sections[blocktype] || Fallback
            return <Component key={id} {...componentProps} />
          })}
        </Box>
      </Container>
    </Layout>
  )
}
export const Head = (props) => {
  return <SEOHead {...props} description={props.excerpt} />
}