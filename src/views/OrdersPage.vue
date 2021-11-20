<template class="container">
  <h1> Orders List Page </h1>
  <Orders v-bind:orders="orders" />
</template>

<script>

import Orders from '../components/Orders.vue'
import axios from '@/api/axios'

export default {
  name: 'OrdersPage',
  components: {
    Orders
  },
  data() {
    return {
      orders: []
    }
  },

  created() {
    axios.getOrders()
      .then(res => {
        this.orders = res.data
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }
}
</script>

<style>
  .container{
    width: 100%;
  }
  h1{
    margin-bottom: 2rem;
  }
</style>
