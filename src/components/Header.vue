<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Sites">Sites</router-link>|
      <router-link to="/Galleries">Galleries</router-link>|
      <router-link to="/Images">Images</router-link>
    </div>
    <h1>Harvard's Art Collection</h1>
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
  margin-right: 20px;
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
  letter-spacing: 4px;
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
  margin-left: 100px;
}
</style>
