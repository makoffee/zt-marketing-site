import React, { useState } from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Link, Flex } from "../components/ui"
import SEOHead from "../components/head"   

export default function Contact() {
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>
<Box class="_form-content">
        <form
  method="POST"
  action="https://zerotier.activehosted.com/proc.php"
  id="_form_1_"
  class="_form _form_1_ _inline-form  _dark"
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
  <Box class="_form-content">
        <Box class="_form_element _x06281366 _full_width _clear">
          <Box class="_form-title">
          </Box>
        </Box>
        <Box class="_form_element _x40012284 _full_width ">
            <Text>First Name*</Text>
          <Box class="_field-wrapper">
            <input type="text" id="firstname" name="firstname" placeholder="First Name" required dataName="firstname"/>
          </Box>
        </Box>
        <Box class="_form_element _x47520620 _full_width ">
          <Text>Last Name*</Text>
          <Box class="_field-wrapper">
            <input type="text" id="lastname" name="lastname" placeholder="Last Name" required data-name="lastname"/>
          </Box>
        </Box>
        <Box class="_form_element _x88103655 _full_width ">
          <Text>Email Address*</Text>
          <Box class="_field-wrapper">
            <input type="email" id="email" name="email" placeholder="Email Address" required data-name="email"/>
          </Box>
        </Box>
        <Box class="_form_element _x02919901 _full_width ">
            <Text>Intended Use*</Text>
          <Box class="_field-wrapper">
            <select name="field[20]" id="field[20]" required="" data-name="intended_use">
              <option selected="">
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
        </Box>
        <Box class="_form_element _field15 _full_width ">
            <Text>Networking Use Case*</Text>
          <input type="hidden" name="field[15][]" value="~|" required data-name="use_cases"/>
          <Box class="_field-wrapper">
            <select id="field[15][]"  name="field[15][]" multiple required="" data-name="use_cases">
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
        </Box>
        <Box class="_form_element _field2 _full_width ">
        <Text>Company</Text>
          <Box class="_field-wrapper">
            <input type="text" id="field[2]" name="field[2]" value="" placeholder="Company" data-name="company"/>
          </Box>
        </Box>
        <Box class="_form_element _x34812439 _full_width ">
            <Text>Phone Number</Text>
          <Box class="_field-wrapper">
            <input type="text" id="phone" name="phone" placeholder="Phone Number" data-name="phone"/>
          </Box>
        </Box>
        <Box class="_form_element _field3 _full_width ">
          <Text>What Is Your Sales Question?</Text>
          <Box class="_field-wrapper">
            <textarea id="field[3]" name="field[3]" placeholder="" data-name="message"></textarea>
          </Box>
        </Box>
        <Box class="_form_element _field1 _full_width ">
        </Box>
        <Box class="_button-wrapper _full_width">
          <button id="_form_1_submit" class="_submit" type="submit">
            Submit
          </button>
        </Box>
        <Box class="_clear-element">
        </Box>
      </Box>
</form>
</Box>
        </Container>
      </Box>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="404: Page not found" />
}