
import { makeApiUrl, makeAxiosHttpClient } from '@/common/main/http'
import { AddAccount } from '@/modules/scribe/domain/usecases'
import { RemoteAddAccount } from '@/modules/scribe/data/usecases'

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())