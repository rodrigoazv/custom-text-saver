import React from "react"

import { Container } from './styles'

function ScribePresentation(props: any) {
    const { children } = props;
   
    return (
      <Container id="editorjs">
        <button onClick={()=>props.saveData()}>Save</button>
      </Container>
    );
};

  export default ScribePresentation;