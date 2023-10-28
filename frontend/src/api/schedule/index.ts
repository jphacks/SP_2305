/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** create new schedule */
  post: {
    status: 200
    /** successful operation */
    resBody: Types.Schedule
    reqBody: Types.Schedule
  }
}
