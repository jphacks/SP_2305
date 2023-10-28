/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** get users schedules */
  patch: {
    status: 200
    /** successful operation */
    resBody: Types.Schedule[]
    reqBody: Types.Schedule
  }

  /** get users schedules */
  get: {
    status: 200
    /** successful operation */
    resBody: Types.Schedule[]
  }
}
