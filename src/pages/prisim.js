import React, { useEffect } from "react";
import Layout from "../components/layout"
import { Container, Box, Heading, Text, Space, Flex, } from "../components/ui"
import SEOHead from "../components/head"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"


const JSCode = `
    const App = props => {
    return (
        <div>
            <h1> Prism JS </h1>
            <div>Awesome Syntax Highlighter</div>
            </div>
        );
    };
  `

const htmlCode = `
    <div><h1> PrismJS Tutorial </h1>
        <p>
            Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
        </p>
    </div>
`

  export function Code({ code, language }) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
          <div className="Code">
            <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
  )
}

export default function CodeBlock() {
    return (
        <Layout>
          <Container width="narrow">
            <Box paddingY={5}>
              <Heading as="h1" center>React Prisim.Js
              </Heading>
              <Text center>
              Oh my goodness it works!
              </Text>
              <Space size={4} />
            </Box>
            <Flex responsive varient="responsiveMedium" gap={4} variant="columnStart">
            <Box paddingY={4} width="full">
              <Text>Javascript example</Text>
              <Code code={JSCode} language="javascript" />
              <Text>html example</Text>
              <Code code={htmlCode} language="html" />
            </Box>
            </Flex>
          </Container>
        </Layout>
      )

}


export const Head = () => {
  return <SEOHead title="Prisim.Js" />
}