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
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { theme } from "../theme.css"

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
          backgroundImage: theme.colors.headerGradient,
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
            {renderRichText(props.body)}
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