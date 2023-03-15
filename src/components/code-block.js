import React, { useEffect } from "react";
import { graphql } from "gatsby"
import { 
    Section,
    Container,
    Box,
} from "../components/ui"
import { theme } from "../theme.css"
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"

export function Code({ code, language }) {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    return (
          <div className="Code">
            <pre>
          <code style={{whiteSpace: 'pre-wrap', overflowWrap: 'anywhere'}} className={`language-${language}`}>{code}</code>
        </pre>
      </div>
  )
}

export default function CodeBlock(props) {  
    return (
        <Section>
            <Container width="narrow">
                <Code code={props.code} language={props.language} />
            </Container>
        </Section>
    )
  }

export const query = graphql`

  fragment CodeBlockContent on CodeBlock {
    id
    name
    language
    code
  }
`
