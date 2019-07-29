<template>
  <header class="header">
    <h1>Harvard's Art Collection</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Galleries">Galleries</router-link>|
      <router-link to="/Images">Images</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h1 {
  color: #a41034;
  margin-left: 20px;
  letter-spacing: 5px;
}
.header {
  background-color: antiquewhite;
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
}
.header a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.header a:hover {
  text-decoration: none;
  color: #a41034;
  border-bottom: 2px solid #a41034;
}

.header a:focus {
  text-decoration: none;
  color: #a41034;
  border-bottom: 2px solid #a41034;
}

#nav {
  margin-top: 50px;
  margin-right: 100px;
}
</style>
