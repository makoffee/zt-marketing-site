import React from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Space, Flex } from "../components/ui"
import SEOHead from "../components/head"   

export default function Contact() {
  return (
    <Layout>
      <Container width="normal">
        <Box paddingY={5}>
          <Heading as="h1" center>Email Signup
          </Heading>
          <Text center>
          Sign up for latest news and insights from ZeroTier.
          </Text>
          <Space size={4} />
        </Box>
        <Box padding={4} style={{background:"black"}}>
        <Flex responsive varient="responsiveMedium" gap={4} Flex variant="verticalCenter" >
        <Box width="half">
        <h2 as="h4">Email Signup</h2>
          <Text>Sign up for latest news and insights from ZeroTier.</Text>
        </Box>
        <Box width="half">
          <form
            method="POST"
            action="https://zerotier.activehosted.com/proc.php"
            id="_form_3_"
            novalidate
          >
            <input type="hidden" name="u" value="3" />
            <input type="hidden" name="f" value="3" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="hidden" name="or" value="27b3a913d054ff5c3b2f3fd64d5fc5d5" data-name="or"/>
            <Flex variant="start" style={{justifyContent:"right"}}>
            <Box style={{Flex: "1 1 auto"}}>
              <input type="email" id="email" name="email" placeholder="Email Address" required/>
            </Box>
            <Box style={{Flex: "0 1 auto"}}>
                <button id="_form_3_submit" className="button primary" type="submit">
                Subscribe
                </button>
            </Box>
              </Flex>
            </form>
          </Box>
        </Flex>
        </Box>
      </Container>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="Email Signup" />
}