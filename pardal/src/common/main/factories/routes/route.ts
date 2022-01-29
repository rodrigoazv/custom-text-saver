import { RouteSetting } from '@/common/data/protocols/adapters/router';

import { makeReactRouterDomRoute } from '../../infra/adapters/router';

export function makeRoute(routeSettings: RouteSetting) {
  return makeReactRouterDomRoute(routeSettings);
}
