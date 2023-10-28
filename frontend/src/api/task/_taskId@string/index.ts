/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** get specific task */
  get: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.Task
  }

  /** get specific task */
  patch: {
    reqHeaders?: Types.BearerToken | undefined
    status: 200
    /** successful operation */
    resBody: Types.Task
    reqBody: Types.Task
  }
}
