import React from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Space, Flex, } from "../components/ui"
import SEOHead from "../components/head"   

export default function Contact() {
  return (
    <Layout>
      <Container width="normal">
        <Box paddingY={5}>
          <Heading as="h1" center>Contact the ZeroTier Sales Team
          </Heading>
          <Text center>
          For product support, please visit the ZeroTier community board.
          </Text>
          <Space size={4} />
        </Box>
        <Flex responsive varient="responsiveMedium" gap={4} variant="columnStart">
        <Box paddingY={4} width="half">
          <Text>Something cool goes here.</Text>
        </Box>
        <Box paddingY={4} width="half">
          <form
            method="POST"
            action="https://zerotier.activehosted.com/proc.php"
            id="_form_1_"
            novalidate
          >
            <input type="hidden" name="u" value="1" />
            <input type="hidden" name="f" value="1" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="hidden" name="or" value="0468b51512225f2c86741f9bbee18714" />
            <Box>
              <Text>First Name*</Text>
              <input type="text" id="firstname" name="firstname" placeholder="First Name" required dataName="firstname"/>
            </Box>
            <Box>
              <Text>Last Name*</Text>
              <input type="text" id="lastname" name="lastname" placeholder="Last Name" required data-name="lastname"/>
            </Box>
            <Box>
              <Text>Email Address*</Text>
              <input type="email" id="email" name="email" placeholder="Email Address" required data-name="email"/>
            </Box>
            <Box>
              <Text>Intended Use*</Text>
              <select name="field[20]" id="field[20]" required="" data-name="intended_use">
                <option selected=""> --- select ---
                </option>
                <option value="Individual">
                  Individual
                </option>
                <option value="Business / Team" selected="">
                  Business / Team
                </option>
                <option value="Resell / Integrate">
                  Resell / Integrate
                </option>
              </select>
            </Box>
            <Box>
              <Text>Networking Use Case*</Text>
              <input type="hidden" name="field[15][]" value="~|" required data-name="use_cases"/>
                <select id="field[15][]"  name="field[15][]" required="" data-name="use_cases">
                  <option selected=""> --- select ---
                  </option>
                  <option value="Internet of Things (IoT)">
                    Internet of Things (IoT)
                  </option>
                  <option value="Platform Embedding (Hardware / Software)">
                    Platform Embedding (Hardware / Software)
                  </option>
                  <option value="Remote Monitoring / Management">
                    Remote Monitoring / Management
                  </option>
                  <option value="SD-WAN">
                    SD-WAN
                  </option>
                  <option value="VPN / Remote Access">
                    VPN / Remote Access
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </Box>
              <Box>
                <Text>Company</Text>
                <input type="text" id="field[2]" name="field[2]" placeholder="Company" data-name="company"/>
              </Box>
              <Box>
              <Text>Phone Number</Text>
                <input type="text" id="phone" name="phone" placeholder="Phone Number" data-name="phone"/>
              </Box>
              <Box>
                <Text>What Is Your Sales Question?</Text>
                <textarea id="field[3]" name="field[3]" placeholder="" data-name="message"></textarea>
              </Box>
              <Box>
                <button id="_form_1_submit" class="ui_buttons_primary__ur0mb5f ui_button__ur0mb5e" type="submit">
                  Submit
                </button>
              </Box>
            </form>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="Contact" />
}