<template>
  <div class="Images">
    <section v-for="image in images">
        <img v-bind:src="image.baseimageurl" >
    </section>
  </div>
</template>

<script>
export default {
  name: "Images",
  data() {
    return {
      images: []
    }
  },
  mounted: function() {
    fetch('https://api.harvardartmuseums.org/Image?apikey=389a19f0-b0a0-11e9-aef7-cf3793100ea0&size=50')
      .then(response => response.json())
      .then(results => this.images= results.records)
      .catch(error => this.props.hasErrored(error))
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
  height: 500px;
  width: 500px;
  padding: 30px;

}

</style>
