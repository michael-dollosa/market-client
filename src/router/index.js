import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Product from '../views/Product.vue'
import OrdersPage from '../views/OrdersPage.vue'
import CreateProduct from '../views/CreateProduct.vue'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/orders',
    name: 'OrdersPage',
    component: OrdersPage
  },
  {
    path: '/add-product',
    name: 'CreateProduct',
    component: CreateProduct
  },
  {
    path: '/product/:id',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
