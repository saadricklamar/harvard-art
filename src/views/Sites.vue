<template>
  <div class="sites">
    <section v-for="site in sites">
      <article>
        <h3>{{site.name}}</h3>
        <p>{{site.address}}</p>
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
  margin: 50px;
  width: 700px;
  height: 550px;
  background: rgba(124, 119, 119, 0.8);
  border: 2px solid white;
  padding: 30px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

img {
  height: 400px;
  width: 500px;
}
</style>