import axios from "axios";

const API_VER = "v1";

export function useApi(config?: any) {
  let base_path = "";

  // base_path = `${window.location.protocol}//${window.location.host}`;
  // Object.assign(config, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  base_path = `http://localhost:3000/api/${API_VER}`;

  const get = async (url: string, query?: string) => {

    const result = await axios.get(`${base_path}${url}`);

    return result.data;
  }

  return { get }
};
