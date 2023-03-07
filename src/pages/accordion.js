import React from 'react';
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Space, Flex, } from "../components/ui"
import SEOHead from "../components/head"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import '../components/accordion.css';

export default function Contact() {
  return (
    <Layout>
      <Container width="narrow">
        <Box paddingY={5}>
          <Heading as="h1" center>React Accessible Accordion
          </Heading>
          <Text center>
          Footloose and fancy free.
          </Text>
          <Space size={4} />
        </Box>
        <Flex responsive varient="responsiveMedium" gap={4} variant="columnStart">
        <Box paddingY={4} width="half">
          <Text>FAQs</Text>
        </Box>
        <Box paddingY={4} width="half">
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}
export const Head = () => {
  return <SEOHead title="Contact Sales" />
}