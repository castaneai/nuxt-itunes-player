<template>
  <section class="container">
    <Player />
    <Search />
  </section>
</template>

<script>
import Player from "~/components/Player";
import Search from "~/components/Search";

export default {
  components: {
    Player,
    Search
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
