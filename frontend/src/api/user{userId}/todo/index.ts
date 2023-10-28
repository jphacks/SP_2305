/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** get specific user's todo */
  get: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.Todo[]
  }
}
