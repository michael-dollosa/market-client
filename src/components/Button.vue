<template>
  <button v-on:click="onClick()">{{label}}</button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    label: String
  },
  methods: {
    onClick() {
      console.log('clicked')
    },
  }
}
</script>

<style>
  button{
    font-size: .7rem;
    padding: 5px;
    background: white;
    border: 1px solid #8f8f8f;
    cursor: pointer;
  }
</style>
