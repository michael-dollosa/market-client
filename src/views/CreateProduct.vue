<template>
  <h1> Create Product </h1>
  <section>
    <form id="v-model-basic" class="form" @submit.prevent="handSubmit">
      <p>Name</p>
      <input class="text" v-model="product_data.product_name" />
      <p>Description</p>
      <input class="text" v-model="product_data.product_description" />
      <p>Quantity</p>
      <input class="text" v-model="product_data.quantity" />
      <p>Price</p>
      <input class="text" v-model="product_data.price" />
      <p>Status</p>
      <div id="v-model-radiobutton" class="status">
        <input type="radio" id="one" value="enable" v-model="product_data.status" />
        <label for="one">Enable</label>

        <input type="radio" id="two" value="disable" v-model="product_data.status" />
        <label for="two">Disable</label> 
      </div>

      <div class="submit">
        <button>Create</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from '@/api/axios'

export default {
  name: 'CreateProduct',

  data() {
    return {
      product_data: []
    }
  },

  methods: {
    handSubmit() {
      console.log('form submitted')

      //create product obj
      let newProduct = {
        product_name: this.product_data.product_name,
        product_description: this.product_data.product_description,
        quantity: parseInt(this.product_data.quantity),
        price: parseFloat(this.product_data.price),
        status: this.product_data.status
      }

      console.log(newProduct)
      axios.createProduct(newProduct)
        .then(res => {
          console.log(res)
          this.$router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: .8rem;
    text-align: start;
    font-weight: 700;
    margin-bottom: 4px;
  }

  button{
    padding: 5px 8px;
    color: white;
    border: 1px solid #38eb7d;
    background: #38eb7d;
  }

  .form{
    padding: 2rem;
    width: 20rem;
    background: white;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  input{
    /* width: 100%; */
    margin-bottom: 1rem;
    padding: 7px;
    border-radius: 1px;
    border: 1px solid #c0bfbf;
  }

  .text {
    width: 100%;
  }

  .status{
    display: flex;
    flex-direction: row;
  }

  .status label{
    margin-right: 1rem;
  }
</style>
