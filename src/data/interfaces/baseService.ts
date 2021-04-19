export interface IBaseService<T> {
  get: (path: string) => Promise<T>;
  post: (path: string, data: T) => Promise<T>;
}
