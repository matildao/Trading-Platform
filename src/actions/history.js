import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function getAllTransactions() {
  return axios
    .get(`${api_url}/history`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function getSpecificUsersTransactions(userEmail) {
  return axios
    .get(`${api_url}/history/${userEmail}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}