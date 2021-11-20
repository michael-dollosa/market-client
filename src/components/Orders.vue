<template>
  <section>
    <div class="card header">
      <h3>Order ID</h3>
      <h3>Product Name</h3>
      <h3>Price</h3>
    </div>
    <div class="card" v-bind:key="order.id" v-for="order in orders" >
      <h3>{{order.id}}</h3>
      <h3>{{order.product.product_name}}</h3>
      <h3>{{order.product.price}}</h3>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Orders',
    props: {
      orders: Array
    }
  }
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .action {
    width: 3rem;
  }

  .label {
    font-size: .8rem;
    font-weight: 700;
  }

  div.card.header h3{
    font-size: .9rem;
    font-weight: 700;
  }

  .card {
    width: 45rem;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #d8d8d8;
  }

  a {
    color: black;
    text-decoration: none;
  }

  h3{
    width: 15rem;
    padding: 5px 0;
    text-align: start;
    font-size: .9rem;
    font-weight: 100;
  }
  
</style>