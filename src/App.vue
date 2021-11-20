<template>
  <div id="nav">
    <router-link to="/">Product List</router-link> |
    <router-link to="/add-product">Create Product</router-link> |
    <router-link to="/orders">Orders List</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

*,
*::after,
*::before{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-size: 62.5%;
  width: 100%;
}
</style>
