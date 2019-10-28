import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function addBalanceToUser(data) {
  return axios
    .put(`${api_url}/users/balance`, data)
    .then(res => res.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function getSpecificUser(email) {
  return axios
    .get(`${api_url}/users/${email}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}
