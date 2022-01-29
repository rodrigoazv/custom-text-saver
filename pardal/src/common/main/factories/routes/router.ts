import { makeReactRouterDomRouter } from '../../infra/adapters/router';

export function makeRouter() {
  const router = makeReactRouterDomRouter();
  return router;
}
