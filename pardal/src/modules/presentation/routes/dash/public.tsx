// dependencies
import React from 'react';

// proxies
//import { DynamicLoadingProxy } from '@/common/presentation/proxies';

// template
//import { PublicTemplate } from '@/common/presentation/pages/templates';

import {Header, Label} from './styles'

import {Scribe} from '@/modules/presentation/scribe/presentation'

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
