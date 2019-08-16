<template>
  <div class="sites">
    <section v-for="site in sites" v-bind:key="site.id">
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
}
</style>