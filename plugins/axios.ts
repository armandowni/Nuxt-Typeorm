import axios from "axios";

const api = axios.create({
  baseURL: process.env.NUXT_API_SECRET,
});

const API_VER = "v1";
const PATHNAME = process.env.NUXT_API_PATHNAME;
const headers = { "content-type": "application/json" };

export function useApi(config?: any) {
  console.log(PATHNAME);

  const base_path = `${PATHNAME}/api/${API_VER}`;

  const get = async (url: string, query?: string) => {
    const path = base_path + url;

    const result = await api
      .get(path, { headers: headers })
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const post = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await api
      .post(path, data, { headers: headers })
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const put = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await api
      .put(path, data, { headers: headers })
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const del = async (url: string) => {
    const path = base_path + url;
    const result = await api
      .delete(path, { headers: headers })
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };

  return { get, post, put, del };
}
