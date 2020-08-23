import axios from "axios";
import { BASE_URL } from "../shared/constants";

export const sendApiRequest = () => {
  return axios.get(BASE_URL).then((response) => response.data);
};
