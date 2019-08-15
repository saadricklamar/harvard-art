<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Sites">Sites</router-link>|
      <router-link to="/Galleries">Galleries</router-link>|
      <router-link to="/Images">Images</router-link>|
      <router-link to="/Audio">Audio</router-link>
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
  letter-spacing: 5px;
  margin-right: 20px;
}
.header {
  align-items: center;
  background-color: antiquewhite;
  display: flex;
  height: 100px;
  justify-content: space-between;
}
.header a {
  color: black;
  font-size: 1.2rem;
  letter-spacing: 3px;
  text-decoration: none;
}

.header a:hover {
  border-bottom: 2px solid #a41034;
  color: #a41034;
  text-decoration: none;
}

.header a:focus {
  border-bottom: 2px solid #a41034;
  color: #a41034;
  text-decoration: none;
}

#nav {
  margin-left: 100px;
  margin-top: 50px;
}
</style>
