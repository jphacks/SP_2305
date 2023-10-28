/* eslint-disable */
export type Methods = {
  /** Register new user */
  post: {
    status: 200
    /** successful operation */
    resBody: string

    reqBody: {
      nickname?: string | undefined
      id?: string | undefined
      password?: string | undefined
    }
  }
}
