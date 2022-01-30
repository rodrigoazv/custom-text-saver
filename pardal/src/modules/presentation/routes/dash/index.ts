// main
import { makeRoute } from '@/common/main/factories/routes';
import { Scribe } from './scribe';

// presentation
import { PublicPresentation } from './public';

export const Public = makeRoute({
  component: PublicPresentation,
  subroutes: [
    Scribe
  ]
});