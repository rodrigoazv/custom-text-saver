// dependencies
import React from 'react';

// Components
import { Container } from './styles'
import { Scribe } from '@/modules/presentation/scribe/presentation'


export const ScribePresentation: React.FC = (props) => {
  const { children } = props;

  return (
    <Container id="editorjs">
      <Scribe />
    </Container>
  );
};
