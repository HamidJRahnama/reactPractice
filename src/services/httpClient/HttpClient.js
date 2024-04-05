import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
// axios.defaults.headers.common["Authorization"] = 555;

export function getData(url, config = {}) {
  return axios
    .get(url, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function postData(url, data, config = {}) {
  return axios
    .post(url, data, config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
