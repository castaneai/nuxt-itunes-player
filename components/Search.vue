<template>
<section class="search">
    <h1>iTunes store視聴くん</h1>
  <input type="text" v-model="keyword">
  <button @click="searchMusics(keyword)">search</button>

  <ul>
     <li v-for="music in musics" :key="music.trackId">
       <button @click="playMusic(music)">♫</button>
       <img :src="music.artworkUrl100">{{ music.trackName }}
     </li>
  </ul>
</section>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    musics() {
      return this.$store.getters.musics;
    }
  },
  methods: {
    searchMusics(keyword) {
      this.$store.dispatch("searchMusics", keyword);
    },
    playMusic(music) {
      this.$store.dispatch("playMusic", music);
    }
  }
};
</script>

<style>
.search {
  padding: 1.5em;
  margin-top: 200px;
}
</style>

