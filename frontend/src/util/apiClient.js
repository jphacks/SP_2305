import api from '../api/$api.ts'
import aspida from '@aspida/fetch'

export const apiClient = api(
  aspida(undefined, {
    baseURL: 'http://127.0.0.1:8080/api/v0',
    throwHttpErrors: true,
  })
)

