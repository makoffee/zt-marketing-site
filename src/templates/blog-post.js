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
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}

export default function BlogPost(props) {
  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {props.title}
          </Heading>
          <Space size={4} />
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
          <Space size={4} />
          <Text center>{props.date}</Text>
          <Space size={4} />
          {props.image && (
            <GatsbyImage
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
            />
          )}
          <Space size={5} />
          <Text>{props.body}</Text>
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />
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