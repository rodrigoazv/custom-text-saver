// dependencies
import React from 'react';

// proxies
//import { DynamicLoadingProxy } from '@/common/presentation/proxies';

// template
//import { PublicTemplate } from '@/common/presentation/pages/templates';

export const PublicPresentation: React.FC = (props) => {
  const { children } = props;

  return (
    <h1>Oi
      { children }
    </h1>
  );
};
