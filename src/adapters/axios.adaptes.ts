import Axios from "axios";
import { IBaseService } from "../data/interfaces/baseService";

export const AxiosAdapterService = <T>(): IBaseService<T> => {
  const api = Axios.create({
    baseURL: "https://604b7df6ee7cb900176a23a7.mockapi.io/api/v1/",
  });

  return {
    get: async (path: string) => {
      try {
        return await api.get(path).then((res) => res.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    post: async (path: string, data: T) => {
      try {
        return await api.post(path, data).then((res) => res.data);
      } catch (error) {
        throw new Error(error);
      }
    },
  };
};
