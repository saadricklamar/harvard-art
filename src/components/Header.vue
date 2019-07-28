<template>
  <header class="header">
    <h1>Harvard's Art Collection</h1>
    <div id="nav">
      <router-link to="/">Home </router-link>|
      <router-link to="/Images">Images</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
h1 {
  color: #a41034;
  margin-left: 20px;
}
.header {
  background-color: antiquewhite;
  display: flex;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
}
.header a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

.header a:hover {
  text-decoration: none;
  color: #a41034;
  border-bottom: 2px solid #a41034;
}

#nav {
  margin-top: 50px;
  margin-left: 100px;
}
</style>
