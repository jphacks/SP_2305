/* eslint-disable */
export type BearerToken = {
  /** bearer token */
  Authorization: string
}

export type Task = {
  uuid?: string | undefined
  userId?: string | undefined
  title?: string | undefined
  type?: 'startend' | 'deadline' | undefined
  start?: string | undefined
  end?: string | undefined
  deadline?: string | undefined
  est?: string | undefined
  actualTime?: number | undefined
  description?: string | undefined
  done?: boolean | undefined
  color?: string | undefined
}

export type Schedule = {
  uuid?: string | undefined
  userId?: string | undefined
  title?: string | undefined
  start?: string | undefined
  end?: string | undefined
  description?: string | undefined
  color?: string | undefined
}

export type User = {
  uuid?: string | undefined
  id?: string | undefined
  nickname?: string | undefined
}

/** Today's todo */
export type Todo = {
  uuid?: string | undefined
  tasks?: Task[] | undefined
  schedules?: Schedule[] | undefined
}
