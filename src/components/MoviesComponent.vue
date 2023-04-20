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
            <h3> Movie {{ index }}</h3>
            <div class="imgMovies">
                <img v-show="movie.poster_path" :src="`${state.imageBaseUrl}${movie.poster_path}`"
                    :alt="`${movie.title} cover image`">
            </div>
            <div class="infoMovie">
                <p>Title: {{ movie.title }}</p>
                <p>Original title: {{ movie.original_title }}</p>
                <p class="d-flex align-items-center">
                <p>Language: <country-flag :country="flagLingue(movie.original_language)" /></p>
                </p>
                <p v-html="state.generateStars(state.generateScore1_5(movie.vote_average))"></p>
            </div>
            <div class="overviewMovies">
                <p> Overview : {{ movie.overview }}</p>
            </div>

           
        </div>
    </div>
</template>


<style></style>