import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_163xhtc } from './auth';
import type { Methods as Methods_16p75hb } from './schedule';
import type { Methods as Methods_1acmaj2 } from './schedule/_scheduleId@string';
import type { Methods as Methods_rvqa7r } from './task';
import type { Methods as Methods_135h0h2 } from './task/_taskId@string';
import type { Methods as Methods_tli9od } from './user';
import type { Methods as Methods_11vzfev } from './user/_userId@string/schedules';
import type { Methods as Methods_k6xkbz } from './user/_userId@string/tasks';
import type { Methods as Methods_hcocj4 } from './user{userId}/todo';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost/api/v0' : baseURL).replace(/\/$/, '');
  const PATH0 = '/auth';
  const PATH1 = '/schedule';
  const PATH2 = '/task';
  const PATH3 = '/user';
  const PATH4 = '/schedules';
  const PATH5 = '/tasks';
  const PATH6 = '/user{userId}/todo';
  const GET = 'GET';
  const POST = 'POST';
  const PATCH = 'PATCH';

  return {
    auth: {
      /**
       * authUser
       * @returns successful operation
       */
      post: (option: { body: Methods_163xhtc['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_163xhtc['post']['resBody'], BasicHeaders, Methods_163xhtc['post']['status']>(prefix, PATH0, POST, option).text(),
      /**
       * authUser
       * @returns successful operation
       */
      $post: (option: { body: Methods_163xhtc['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_163xhtc['post']['resBody'], BasicHeaders, Methods_163xhtc['post']['status']>(prefix, PATH0, POST, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    schedule: {
      _scheduleId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * get users schedules
           * @returns successful operation
           */
          patch: (option: { body: Methods_1acmaj2['patch']['reqBody'], headers?: Methods_1acmaj2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1acmaj2['patch']['resBody'], BasicHeaders, Methods_1acmaj2['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * get users schedules
           * @returns successful operation
           */
          $patch: (option: { body: Methods_1acmaj2['patch']['reqBody'], headers?: Methods_1acmaj2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_1acmaj2['patch']['resBody'], BasicHeaders, Methods_1acmaj2['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          /**
           * get users schedules
           * @returns successful operation
           */
          get: (option?: { headers?: Methods_1acmaj2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1acmaj2['get']['resBody'], BasicHeaders, Methods_1acmaj2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * get users schedules
           * @returns successful operation
           */
          $get: (option?: { headers?: Methods_1acmaj2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_1acmaj2['get']['resBody'], BasicHeaders, Methods_1acmaj2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * create new schedule
       * @returns successful operation
       */
      post: (option: { body: Methods_16p75hb['post']['reqBody'], headers?: Methods_16p75hb['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_16p75hb['post']['resBody'], BasicHeaders, Methods_16p75hb['post']['status']>(prefix, PATH1, POST, option).json(),
      /**
       * create new schedule
       * @returns successful operation
       */
      $post: (option: { body: Methods_16p75hb['post']['reqBody'], headers?: Methods_16p75hb['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_16p75hb['post']['resBody'], BasicHeaders, Methods_16p75hb['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`,
    },
    task: {
      _taskId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`;

        return {
          /**
           * get specific task
           * @returns successful operation
           */
          get: (option?: { headers?: Methods_135h0h2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_135h0h2['get']['resBody'], BasicHeaders, Methods_135h0h2['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * get specific task
           * @returns successful operation
           */
          $get: (option?: { headers?: Methods_135h0h2['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_135h0h2['get']['resBody'], BasicHeaders, Methods_135h0h2['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * get specific task
           * @returns successful operation
           */
          patch: (option: { body: Methods_135h0h2['patch']['reqBody'], headers?: Methods_135h0h2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_135h0h2['patch']['resBody'], BasicHeaders, Methods_135h0h2['patch']['status']>(prefix, prefix1, PATCH, option).json(),
          /**
           * get specific task
           * @returns successful operation
           */
          $patch: (option: { body: Methods_135h0h2['patch']['reqBody'], headers?: Methods_135h0h2['patch']['reqHeaders'] | undefined, config?: T | undefined }) =>
            fetch<Methods_135h0h2['patch']['resBody'], BasicHeaders, Methods_135h0h2['patch']['status']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * create new task
       * @returns successful operation
       */
      post: (option: { body: Methods_rvqa7r['post']['reqBody'], headers?: Methods_rvqa7r['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_rvqa7r['post']['resBody'], BasicHeaders, Methods_rvqa7r['post']['status']>(prefix, PATH2, POST, option).json(),
      /**
       * create new task
       * @returns successful operation
       */
      $post: (option: { body: Methods_rvqa7r['post']['reqBody'], headers?: Methods_rvqa7r['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
        fetch<Methods_rvqa7r['post']['resBody'], BasicHeaders, Methods_rvqa7r['post']['status']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    user: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          schedules: {
            /**
             * get users schedules
             * @returns successful operation
             */
            get: (option?: { headers?: Methods_11vzfev['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_11vzfev['get']['resBody'], BasicHeaders, Methods_11vzfev['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json(),
            /**
             * get users schedules
             * @returns successful operation
             */
            $get: (option?: { headers?: Methods_11vzfev['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_11vzfev['get']['resBody'], BasicHeaders, Methods_11vzfev['get']['status']>(prefix, `${prefix1}${PATH4}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH4}`,
          },
          tasks: {
            /**
             * get users tasks
             * @returns successful operation
             */
            get: (option?: { headers?: Methods_k6xkbz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_k6xkbz['get']['resBody'], BasicHeaders, Methods_k6xkbz['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json(),
            /**
             * get users tasks
             * @returns successful operation
             */
            $get: (option?: { headers?: Methods_k6xkbz['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
              fetch<Methods_k6xkbz['get']['resBody'], BasicHeaders, Methods_k6xkbz['get']['status']>(prefix, `${prefix1}${PATH5}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH5}`,
          },
        };
      },
      /**
       * Register new user
       * @returns successful operation
       */
      post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody'], BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH3, POST, option).text(),
      /**
       * Register new user
       * @returns successful operation
       */
      $post: (option: { body: Methods_tli9od['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_tli9od['post']['resBody'], BasicHeaders, Methods_tli9od['post']['status']>(prefix, PATH3, POST, option).text().then(r => r.body),
      $path: () => `${prefix}${PATH3}`,
    },
    user_userId_: {
      todo: {
        /**
         * get specific user's todo
         * @returns successful operation
         */
        get: (option?: { headers?: Methods_hcocj4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_hcocj4['get']['resBody'], BasicHeaders, Methods_hcocj4['get']['status']>(prefix, PATH6, GET, option).json(),
        /**
         * get specific user's todo
         * @returns successful operation
         */
        $get: (option?: { headers?: Methods_hcocj4['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_hcocj4['get']['resBody'], BasicHeaders, Methods_hcocj4['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
