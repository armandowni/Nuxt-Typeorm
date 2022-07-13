import axios from "axios";

const API_VER = "v1";
let base_path = `http://localhost:3000`;
base_path = `${base_path}/api/${API_VER}`;

export const get = async (url: string, query?: string) => {
  const result = await axios.get(`${base_path}/${url}`);

  return result.data;
};
