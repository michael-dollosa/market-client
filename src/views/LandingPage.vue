<template class="container">
  <h1> Product List Page </h1>
  <Products v-bind:products="products" />
</template>

<script>

import Products from '../components/Products.vue'
import axios from '@/api/axios'

export default {
  name: 'LandingPage',
  components: {
    Products
  },
  data() {
    return {
      products: []
    }
  },

  created() {
    axios.getProducts()
      .then(res => {
        this.products = res.data
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
