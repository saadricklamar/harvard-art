<template>
  <div id="home">
    <section class="welcome-card">
      <p>
        Harvard's Art Collection is my final project at the
        <a
          href="https://turing.io/"
          target="_blank"
        >Turing School of Software & Design</a>. The goal of this project was to mimic a take home project,
        specifically, learning a new piece of techonology over a few days, in this case,
        <a
          href="https://vuejs.org/"
          target="_blank"
        >Vue.js</a>.
        <br />
        <br />I was prompted to create an application in Vue.js that functions as an art gallery
        using the
        <a
          href="https://www.harvardartmuseums.org/collections/api"
          target="_blank"
        >
          Harvard
          Museum API
        </a>.
        <br />
        <br />Some of the major takeways were how to use
        <a
          href="https://router.vuejs.org/"
          target="_blank"
        >Vue Router</a>, Vue Directives (such as v-for and v-if), and unit testing with
        <a
          href="https://github.com/vuejs/vue-test-utils"
          target="_blank"
        >Vue Test Utils.</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.4;
}

#home {
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-card {
  margin-top: 50px;
  width: 700px;
  height: 550px;
  background: rgba(124, 119, 119, 0.8);
  border: 2px solid white;
  padding: 30px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}
p {
  line-height: 1.6;
}

a {
  color: black;
}

a:hover {
  color: #a41034;
}
</style>
