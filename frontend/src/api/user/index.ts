/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** Register new user */
  post: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.User[]

    reqBody: {
      nickname?: string | undefined
      id?: string | undefined
      password?: string | undefined
    }
  }
}
