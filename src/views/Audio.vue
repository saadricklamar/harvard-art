<template>
  <div class="Audio">
    <section v-for="audio in audioRecordings">
      <article>
        <p>{{audio.description}}</p>
        <audio controls>
            <source v-bind:src="audio.primaryurl" type="audio/mpeg">
        </audio>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Audio",
  data() {
    return {
      audioRecordings: []
    };
  },
  mounted: function() {
    fetch(
      `https://api.harvardartmuseums.org/audio?apikey=${process.env.VUE_APP_API_KEY}&size=100`
    )
      .then(response => response.json())
      .then(results => (this.audioRecordings = results.records))
      .catch(error => this.props.hasErrored(error));
  }
};
</script>
<style scoped>

</style>