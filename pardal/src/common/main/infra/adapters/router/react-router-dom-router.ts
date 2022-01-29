import { ReactRouterDomRouter } from '@/common/infra/adapters/router/react-router-dom';

export function makeReactRouterDomRouter() {
  const reactRouterDomRouter = new ReactRouterDomRouter();
  return reactRouterDomRouter;
}
