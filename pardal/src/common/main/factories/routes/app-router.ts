import { makeRouter } from './router';

import { Routes } from '@/common/routes';

export function makeAppRouter() {
  const router = makeRouter();
  router.addRoutes([Routes]);

  return router;
}
