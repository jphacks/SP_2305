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
  est?: number | undefined
  actualTime?: number | undefined
  description?: string | undefined
  done?: boolean | undefined
  color?: string | undefined
  repeat?: number | undefined
  progress?: number | undefined
  /** 頻度の場合何回やるか？ */
  for?: number | undefined
  frequency?: 'week' | 'month' | 'year' | undefined
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

/** バックエンドからの一つTask割り当て情報 */
export type AITask = {
  Task?: Task | undefined
  start?: string | undefined
  end?: string | undefined
}

/** Today's todo */
export type Todo = {
  uuid?: string | undefined
  tasks?: AITask[] | undefined
  schedules?: Schedule[] | undefined
}
