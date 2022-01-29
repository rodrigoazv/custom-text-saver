import { makeRouter } from './router';

import { Routes } from '@/modules/presentation/routes';

export function makeAppRouter() {
  const router = makeRouter();
  router.addRoutes([Routes]);

  return router;
}
