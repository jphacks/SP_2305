/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** get specific task */
  get: {
    status: 200
    /** successful operation */
    resBody: Types.Task
  }

  /** get specific task */
  patch: {
    status: 200
    /** successful operation */
    resBody: Types.Task
    reqBody: Types.Task
  }
}
