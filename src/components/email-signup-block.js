import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Box,
  Flex,
  Text,
  Section,
} from "./ui"

export default function EmailSignupBlock(props) {
  return (  
      <Section>
        <Container>
            <Box padding={4} background="black" radius="large">
            <Flex responsive gap={3} varient="end">
                <Flex variant="columnStart" gap={0} style={{flex:"1 1 auto"}}>
                    <Text bold variant="lead" style={{marginBottom:"0"}}>{props.heading}</Text>
                    <Text variant="small">{props.text}</Text>
                </Flex>
                <Flex gap={2} style={{flex:"1 0 auto", justifyContent:"right"}}>
                    <form
                        method="POST"
                        action="https://zerotier.activehosted.com/proc.php"
                        id="_form_3_"
                        noValidate
                    >
                        <input type="hidden" name="u" value="3" />
                        <input type="hidden" name="f" value="3" />
                        <input type="hidden" name="s" />
                        <input type="hidden" name="c" value="0" />
                        <input type="hidden" name="m" value="0" />
                        <input type="hidden" name="act" value="sub" />
                        <input type="hidden" name="v" value="2" />
                        <input type="hidden" name="or" value="27b3a913d054ff5c3b2f3fd64d5fc5d5" data-name="or"/>
                        <Flex variant="verticalCenter" style={{justifyContent:"right"}}>
                            <Flex style={{flex:"1 1 auto", justifyContent:"flex-end"}}>
                                <input type="email" id="email" name="email" placeholder="Email Address" required style={{marginBottom:"0"}}/>
                             </Flex>
                            <Flex>
                            <button id="_form_3_submit" className="button primary" type="submit">Subscribe</button>
                            </Flex>
                        </Flex>
                    </form>
                </Flex>
            </Flex>
            </Box>
            </Container>
        </Section>
  )
}
export const query = graphql`
  fragment EmailSignupBlockContent on EmailSignupBlock {
    id
    heading
    text
  }
`