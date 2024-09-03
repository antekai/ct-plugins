/// <reference types="vite/client" />

declare module "axios" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface AxiosResponse<T = unknown> extends Promise<T> {}
}
