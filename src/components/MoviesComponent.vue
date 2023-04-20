<script>
import { state } from "../state"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "MoviesComponent",
    components: {
        CountryFlag
    },
    data() {
        return {
            state,
        }
    },
    methods: {
        flagLingue(language) {
            switch (language) {
                case "ja":
                    return "jp";
                case "en":
                    return "gb-eng";
                case "ko":
                    return "kr";
                default:
                    return language;
            }
        }
    }
}
</script>


<template>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        <div class="col" v-for="(movie, index) in state.fetchedMovies">
            <h5 class="text-center"> Movie {{ index }}</h5>
            <div class="imgMovies">
                <img v-show="movie.poster_path" :src="`${state.imageBaseUrl}${movie.poster_path}`"
                    :alt="`${movie.title} cover image`">
            </div>
            <ul class="info">
                <li>Title: {{ movie.title }}</li>
                <li>Original title: {{ movie.original_title }}</li>
                <li class="d-flex align-items-center">
                <li>Language: <country-flag :country="flagLingue(movie.original_language)" /></li>
                </li>
                <li v-html="state.generateStars(state.generateScore1_5(movie.vote_average))"></li>
                <li> Overview : {{ movie.overview }}</li>
            </ul>   
        </div>
    </div>
</template>


<style></style>