<template>

  <header class="header">
  <h1>Harvard's Art Collection</h1>
  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
  </div>
  <button>Paintings</button>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
}
.header {
  background-color: antiquewhite
}

.header a {
  text-decoration: none;
  color: black;
}
</style>
