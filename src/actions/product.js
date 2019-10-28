import axios from "axios";
const api_url = process.env.VUE_APP_APIBASE;

export function getAllProducts() {
  return axios
    .get(`${api_url}/products`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

//ownerId - email
export function getProductsForSpecificUser(ownerId) {
  return axios
    .get(`${api_url}/products/${ownerId}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

export function getAllProductsForSpecificUser(ownerId) {
  return axios
    .get(`${api_url}/products/all/${ownerId}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

//email, productId, balance, price
export function sellProduct(data) {
  return axios
    .put(`${api_url}/products/sell`, data)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

//email, depositId
export function buyProduct(data) {
  return axios
    .post(`${api_url}/products/buy`, data)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}

//email
export function getSpecificUser(email) {
  return axios
    .get(`${api_url}/users/${email}`)
    .then(res => res.data.data)
    .catch((e) => {
      this.errors.push(e);
    });
}
