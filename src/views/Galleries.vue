<template>
  <div class="galleries">
    <section
      v-if="gallery.labeltext !== null"
      class="gallery-card"
      v-for="gallery in galleries"
      v-bind:key="gallery.id"
    >
      <h2>Gallery: {{ gallery.name }}</h2>
      <a class="floor-link" v-bind:href="url + gallery.floor" target="_blank"
        >Floor {{ gallery.floor }}</a
      >
      <p class="theme" v-if="gallery.theme !== null">
        Theme: {{ gallery.theme }}
      </p>
      <p class="description">{{ gallery.labeltext }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Galleries",
  data() {
    return {
      galleries: [],
      url: "https://www.harvardartmuseums.org/visit/floor-plan/"
    };
  },
  mounted: function() {
    fetch(
      `https://api.harvardartmuseums.org/Gallery?apikey=${process.env.VUE_APP_API_KEY}&size=64`
    )
      .then(response => response.json())
      .then(results => (this.galleries = results.records))
      .catch(error => this.props.hasErrored(error));
  }
};
</script>

<style>
.galleries {
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 30px;
}
.gallery-card {
  background: white;
  border-radius: 5px;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 40px;
  padding: 20px;
}

h2,
.floor-link,
.theme {
  color: #a41034;
}

.floor-link:hover {
  color: black;
}
</style>
