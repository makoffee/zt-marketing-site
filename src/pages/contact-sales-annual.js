import React from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Space, Flex, Subhead, } from "../components/ui"
import SEOHead from "../components/head"   

export default function Contact() {
  return (
    <Layout>
      <Container width="normal">
        <Box paddingY={5}>
          <Heading as="h1" center>ZeroTier Business 
          </Heading>
          <Text center>
          For product support, please visit the ZeroTier community board.
          </Text>
          <Space size={4} />
        </Box>
        <Flex responsive gap={4} variant="columnStart">
        <Box paddingY={4} width="half">
          <Subhead>An annual plan for internal teams or small businesses.</Subhead>
          <Text bold>Business Plan Features:</Text>
            <Text>✔ 3 Admins</Text>
            <Text>✔ 3 Business SSO seats</Text>
            <Text>✔ 150 Nodes</Text>
            <Text>✔ Ticketed support</Text>
            <Text>✔ Annual pricing</Text>
            <Text bold>All for $1500.00 USD/year.</Text>
            <Text>Note: If your organization already has a paid account, Business will be an upgrade from your current plan. </Text>
        </Box>
        <Box paddingY={4} width="half">
          <form
            method="POST"
            action="https://zerotier.activehosted.com/proc.php"
            id="_form_15_"
            novalidate
          >
            <input type="hidden" name="u" value="15" />
            <input type="hidden" name="f" value="15" />
            <input type="hidden" name="s" />
            <input type="hidden" name="c" value="0" />
            <input type="hidden" name="m" value="0" />
            <input type="hidden" name="act" value="sub" />
            <input type="hidden" name="v" value="2" />
            <input type="hidden" name="or" value="9a2a5f90293c77e92833671a2e989a61" />
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
              <Text>ZeroTier Business*</Text>
              <input type="hidden" name="field[16][]" id="field[16][]" value="~|" required data-name="intended_use"/>
              <Box>
                <input checked="true" id="field_16Yes" type="checkbox" name="field[16][]" value="Yes" required="" data-name="bizannual" style={{width: "20px", display:"inline"}}/> 
                <label for="field_16Yes">Yes*</label>
              </Box>
              
            </Box>
            <Box>
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
                <Text>Current ZeroTier Customers Only: What Is Your Account Email Address? </Text>
                <textarea id="field[3]" name="field[3]" placeholder="" data-name="message"></textarea>
              </Box>
              <Box>
                <button id="_form_1_submit" className="button primary" type="submit">
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
  return <SEOHead title="ZeroTier Business" />
}