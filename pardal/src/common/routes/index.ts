// main
import { makeRoute } from '@/common/main/factories/routes';

// routes
import { Public } from './dash';

export const Routes = makeRoute({
  subroutes: [Public],
});
