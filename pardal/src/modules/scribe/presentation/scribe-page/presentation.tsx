
import React from 'react'

import { Container } from './styles'

function ScribePresentation (props: any) {
  const {
    output, onButtonClick
  } = props

  return (
      <Container id="editorjs">
        <button onClick={onButtonClick}>Save</button>
        <pre ref={output}></pre>
      </Container>
  )
};

export default ScribePresentation
