<template>
  <div id="home">
    <section>
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
        <br />I was prompted to create a single-page application in Vue.js that functions as an art gallery
        using the
        <a
          href="https://www.harvardartmuseums.org/collections/api"
          target="_blank"
        >
          Harvard
          Museum API
        </a>.
        <br />
        <br />
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
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

section {
  margin-top: 100px;
  width: 700px;
  height: 550px;
  background: rgba(130, 130, 130, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8), 0 6px 6px rgba(0, 0, 0, 0.5);
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
  color: white;
}

a:hover {
  color: orangered;
}
</style>
