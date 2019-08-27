<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Home|</router-link>
      <router-link to="/Sites">Sites|</router-link>
      <router-link to="/Galleries">Galleries|</router-link>
      <router-link to="/Images">Images|</router-link>
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
@media (max-width: 1100px) {
  h1 {
    font-size: 1.2rem;
  }
}

@media (max-width: 900px) {
  .header {
    align-items: flex-start;
    height: 125px;
  }

  .header a {
    margin-top: 40px;
    align-items: center;
  }

  h1 {
    margin-top: 20px;
    position: relative;
    right: 400px;
    white-space: nowrap;
  }

  #nav {
    font-size: .2rem;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-left: 50px;
  }
}

@media (max-width: 600px) {
  .header a {
    font-size: .5rem;
  }
  h1 {
    font-size: .8rem;
    position: relative;
    right: 280px;
    white-space: nowrap;
  }
}
</style>
