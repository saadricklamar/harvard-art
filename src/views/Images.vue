<template>
  <div class="Images">
    <section v-if="!images.length" class="spinner">
      <div class="loader"></div>
    </section>
    <section v-for="image in images" v-bind:key="image.id">
      <article>
        <img v-bind:src="image.baseimageurl" />
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      images: []
    };
  },
  mounted: function() {
    fetch(
      `https://api.harvardartmuseums.org/Image?apikey=${process.env.VUE_APP_API_KEY}&size=100`
    )
      .then(response => response.json())
      .then(results => (this.images = results.records))
      .catch(error => this.props.hasErrored(error));
  }
};
</script>
<style scoped>
.Images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
}

img {
  height: 300px;
  padding: 30px;
  width: 300px;
}

article {
  background-color: #ddc;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  border: 30px solid #eee;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  height: 52vh;
  padding: 10px;
  margin: 20px;
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
</style>
