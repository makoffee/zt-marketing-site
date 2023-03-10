import React from 'react';
import { graphql } from "gatsby"
import { Container, Box, Heading, Text, Section, Space, Flex, } from "../components/ui"
import { theme } from "../theme.css"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import '../components/accordion.css';

export function AccordionListItem(props) {
    return (
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    <Text>{props.title}</Text>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div style={{fontSize: theme.fontSizes[2], lineHeight: theme.lineHeights.text}}>
                    {renderRichText(props.body)}
                </div>
            </AccordionItemPanel>
        </AccordionItem>
    )
}

export default function AccordionList(props) {
  return (

    <Section>
        <Container width="normal">
            <Box padding={4} radius="large">
            {props.title && (<Heading>
                {props.heading}
                </Heading>)}
                    <Accordion>
                        {props.content.map((content) => (
                            <AccordionListItem key={content.id} {...content} />
                        ))}
                    </Accordion>
            </Box>
        </Container>
        </Section>
  )
}

export const query = graphql`
  fragment AccordionListContent on AccordionList {
    id
    heading
    text
    content {
      id
      title
      body
    }
  }
`