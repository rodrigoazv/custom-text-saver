
import { AxiosHttpClient } from '@/common/infra/http/http-axios-client'

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient()