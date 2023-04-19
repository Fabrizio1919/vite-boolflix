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
          <p>Language: {{ movie.original_language }}</p>
          <p>Score: {{ movie.vote_average }}</p>
    </div>
  </div>
</template>

<style></style>