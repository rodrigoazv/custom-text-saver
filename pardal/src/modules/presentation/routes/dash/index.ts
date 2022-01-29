// main
import { makeRoute } from '@/common/main/factories/routes';

// presentation
import { PublicPresentation } from './public';

export const Public = makeRoute({
  path: '/dash',
  component: PublicPresentation,
});