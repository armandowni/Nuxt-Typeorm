import axios from "axios";

const API_VER = "v1";
const PORT = 3000;
const HOST = window.location.hostname ||`localhost:${PORT}`;

export function useApi(config?: any) {
  console.log(process.env);
  
  const base_path = `http://${HOST}:${PORT}/api/${API_VER}`;

  const get = async (url: string, query?: string) => {
    const path = base_path + url;

    const result = await axios
      .get(path)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const post = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await axios
      .post(path, data)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const put = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await axios
      .put(path, data)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const del = async (url: string) => {
    const path = base_path + url;
    const result = await axios
      .delete(path)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };

  return { get, post, put, del };
}
