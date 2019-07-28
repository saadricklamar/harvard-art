<template>
  <div class="galleries">
    <section v-if="gallery.labeltext !== null" class="gallery-card" v-for="gallery in galleries">
      <h2>Gallery: {{gallery.name}}, floor {{gallery.floor}}</h2>
      <p class="theme" v-if="gallery.theme !==null">Theme: {{gallery.theme}}</p>
      <p class="description">{{gallery.labeltext}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Galleries",
  data() {
    return {
      galleries: []
    };
  },
  mounted: function() {
    fetch(
      "https://api.harvardartmuseums.org/Gallery?apikey=389a19f0-b0a0-11e9-aef7-cf3793100ea0&size=64"
    )
      .then(response => response.json())
      .then(results => (this.galleries = results.records))
      .catch(error => this.props.hasErrored(error));
  }
};
</script>

<style>
.galleries {
  margin: 20px;
}
.gallery-card {
  margin-top: 100px;
  background: rgba(130, 130, 130, 0.5);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8), 0 6px 6px rgba(0, 0, 0, 0.5);
  border: 2px solid white;
  padding: 20px;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
  font-size: 1rem;
}

h2,
.theme {
  color: #a41034;
}
</style>