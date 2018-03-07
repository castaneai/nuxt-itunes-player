<template>
    <section class="player">
    <h2 v-if="currentMusic"><img :src="currentMusic.artworkUrl100" /> {{ currentMusic.trackName }}</h2>
    <audio v-if="currentMusic" :src="currentMusic.previewUrl" controls></audio>
    </section>
</template>

<script>
export default {
  components: {},
  computed: {
    currentMusic() {
      return this.$store.getters.currentMusic;
    }
  }
};
</script>

<style>
.player {
  background: black;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  height: 200px;
}
</style>
