/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  /** get users schedules */
  get: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.Schedule[]
  }
}
