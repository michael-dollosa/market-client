import axios from 'axios'

const marketApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Accept: 'application/json'
  }
})

export default {
  getProducts() {
    return marketApi.get('/products')
  },

  showProduct(id) {
    return marketApi.get(`/products/${id}`)
  },

  createProduct(data) {
    return marketApi.post(`/products/`, data )
  },

  updateProduct(data){
    return marketApi.put(`/products/${data.id}`, data )
  },

  getOrders() {
    return marketApi.get('/orders')
  }
}