// main
import { makeRoute } from '@/common/main/factories/routes';

// presentation
import { ScribePresentation } from './presentation'

export const Scribe = makeRoute({
  path: '/scribe',
  component: ScribePresentation,
});