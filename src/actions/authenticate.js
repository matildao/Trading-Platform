import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function validateToken(token) {
  return axios
    .post(`${api_url}/auth/validatetoken/${token}`)
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function login(data) {
  return axios
    .post(`${api_url}/auth/login`, data)
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function register(data) {
  return axios
    .post(`${api_url}/auth/register`, data)
    .then(res => res)
    .catch((e) => {
      this.errors.push(e);
    });
}
