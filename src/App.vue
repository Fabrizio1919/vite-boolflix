<script>
import { state } from "./state"
export default {
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <input @keyup.enter="state.generateMovie()" type="search" v-model.trim="state.searchText">
  <button @click="state.generateMovie()">Search</button>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
    <div class="col" v-for="(movie, index) in state.fetchedMovies">
      <h3> Movie {{ index }}</h3>
      <p>Title: {{ movie.title }}</p>
      <p>Original title: {{ movie.original_title }}</p>
      <p class="d-flex align-items-center">Language:
        <img :src="`https://flagcdn.com/16x12/${movie.original_language}.png`" :alt="`${movie.original_language} flag`">
      </p>
      <p>Score: {{ movie.vote_average }}</p>
    </div>
  </div>
  <!-- ./movies -->
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
    <div class="col" v-for="(tvShow, index) in state.fetchedTvShows">
      <h3> Tv Show {{ index }}</h3>
      <p>Title: {{ tvShow.name }}</p>
      <p>Original title: {{ tvShow.original_name }}</p>
      <p class="d-flex align-items-center">Language:
        <img class="ms-2" :src="`https://flagcdn.com/16x12/${tvShow.original_language}.png`"
          :alt="`${tvShow.original_language} flag`">
      </p>
      <p>Score: {{ tvShow.vote_average }}</p>
    </div>
  </div>
  <!-- ./tvShow  -->
</template>

<style></style>