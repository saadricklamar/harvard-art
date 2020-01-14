<template>
  <div class="audio-container">
    <section v-if="!audioRecordings.length" class="spinner">
      <div class="loader"></div>
    </section>
    <section
      class="audio-cards"
      v-for="audio in audioRecordings"
      v-bind:key="audio.id"
    >
      <p>{{ audio.description }}</p>
      <audio controls>
        <source v-bind:src="audio.primaryurl" type="audio/mpeg" />
      </audio>
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
.audio-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.audio-cards {
  height: 250px;
  width: 450px;
  margin: 20px auto;
  background: rgba(124, 119, 119, 0.8);
  border-radius: 5px;
  border: 2px solid white;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  text-align: left;
}
audio {
  margin: 20px 70px;
}

p {
  padding: 20px;
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
