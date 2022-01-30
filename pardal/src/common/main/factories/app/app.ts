// dependencies
import React from 'react';

// presentation
import { App } from '@/common/presentation/app';

// infra
import { makeAppRouter } from '@/common/main/factories/routes';

export function makeApp(): JSX.Element {
  const appRouter = makeAppRouter();
  const children = appRouter.compile();

  return React.createElement(App, {}, children);
}
