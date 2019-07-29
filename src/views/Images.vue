<template>
  <div class="Images">
    <section v-for="image in images">
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
      "https://api.harvardartmuseums.org/Image?apikey=389a19f0-b0a0-11e9-aef7-cf3793100ea0&size=100"
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
  width: 300px;
  padding: 30px;
}

article {
  background-color: #ddc;
  border: 30px solid #eee;
  border-bottom-color: #fff;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  height: 49vh;
  padding: 10px;
  margin: 20px;
}
</style>
