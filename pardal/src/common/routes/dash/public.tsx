// dependencies
import React from 'react';

// proxies
//import { DynamicLoadingProxy } from '@/common/presentation/proxies';

// template
//import { PublicTemplate } from '@/common/presentation/pages/templates';

import {Header, Label} from './styles'

export const PublicPresentation: React.FC = (props) => {
  const { children } = props;

  return (
    <>
      <Header>
        <Label>Scribe</Label>
      </Header>
      <>
      { children }
      </>
    </>
  );
};
