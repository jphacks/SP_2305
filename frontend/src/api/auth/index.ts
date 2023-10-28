/* eslint-disable */
export type Methods = {
  /** authUser */
  post: {
    status: 200
    /** successful operation */
    resBody: string

    reqBody: {
      id?: string | undefined
      password?: string | undefined
    }
  }
}
