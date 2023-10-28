/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** create new task */
  post: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.Task
    reqBody: Types.Task
  }
}
