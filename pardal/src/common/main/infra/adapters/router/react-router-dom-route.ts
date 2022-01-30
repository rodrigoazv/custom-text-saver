import { RouteSetting } from '@/common/data/protocols/adapters/router';

import { ReactRouterDomRoute } from '@/common/infra/adapters/router/react-router-dom';

export function makeReactRouterDomRoute(routeSettings: RouteSetting) {
  return new ReactRouterDomRoute(routeSettings);
}
