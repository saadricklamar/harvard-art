<template>
  <div class="sites">
    <section v-if="!sites.length" class="spinner">
      <div class="loader"></div>
    </section>
    <section v-for="site in sites" v-bind:key="site.id">
      <article class="site-card">
        <h3>{{ site.name }}</h3>
        <p>{{ site.address }}</p>
        <img v-bind:src="require(`../assets/${site.name}.jpeg`)" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Sites",
  data() {
    return {
      sites: []
    };
  },
  mounted: function() {
    fetch(
      `https://api.harvardartmuseums.org/Site?apikey=${process.env.VUE_APP_API_KEY}`
    )
      .then(response => response.json())
      .then(results => (this.sites = results.records))
      .catch(error => this.props.hasErrored(error));
  }
};
</script>
<style scoped>
.sites {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

article {
  background: rgba(124, 119, 119, 0.8);
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  height: 550px;
  margin: 50px;
  padding: 30px;
  width: 700px;
  text-align: center;
}

img {
  border: 2px solid white;
  height: 400px;
  width: 600px;
  margin-top: 5px;
}

.spinner {
  margin: 15% auto;
}
.loader {
  border: 22px solid #f3f3f3;
  border-top: 22px solid #a41034;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  article {
    font-size: 1rem;
    height: 460px;
    width: 430px;
  }

  img {
    height: 350px;
    width: 370px;
  }
}

@media (max-width: 450px) {
  article {
    font-size: 0.8rem;
    height: 420px;
    width: 300px;
  }

  img {
    height: 300px;
    width: 240px;
  }
}
</style>
