import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
  Linkedin,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"
import FooterItemGroup from "./footer-item-group"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
  LINKEDIN: {
    url: "https://linkedin.com",
    name: "LinkedIn",
    icon: <Linkedin />,
  },
}

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          tagline
          navItems {
            id
            navItemType
            ... on NavItem {
              href
              text
            }
            ... on NavItemGroup {
              name
              navItems {
                id
                href
                text
                description
                icon {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { meta, socialLinks, copyright, navItems, tagline } = data.layout.footer

  return (
    
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <Flex variant="columnStart">
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Text variant="small">{tagline}</Text>
          </Flex>
          <Space />
          <FlexList variant="start" responsive>
              {navItems?.map((navItem) => (
                 <li key={navItem.id} style={{paddingBottom:"20px"}}>
                 {navItem.navItemType === "Group" ? (
                   <FooterItemGroup
                     name={navItem.name}
                     navItems={navItem.navItems}
                   />
                 ) : (
                   <NavLink to={navItem.href}>{navItem.text}</NavLink>
                 )}
               </li>
               
              ))}
            </FlexList>
        </Flex>
        <Space size={4} />
        <FlexList>
            {socialLinks &&
              socialLinks.map((link) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
          <Space size={4} />
        <Flex variant="start" responsive>
        <Text variant="small">{copyright}</Text>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
        </Flex>
      </Container>
      <Space size={3} />
    </Box>
  )
}
