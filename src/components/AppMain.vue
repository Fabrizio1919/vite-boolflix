<script>
import { state } from "../state"
import bandiere from "/src/assets/data/bandiere"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "AppMain",
    components: {
        CountryFlag
    },
    data() {
        return {
            state,
            bandiere: bandiere
        }
    },
    methods: {
        LanguageFlag(language) {
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
            <div class="imgMovies img-fluid">
                <img v-show="movie.poster_path" :src="`${state.imageBaseUrl}${movie.poster_path}`"
                    :alt="`${movie.title} cover image`">
            </div>
            <p>Title: {{ movie.title }}</p>
            <p>Original title: {{ movie.original_title }}</p>
            <p class="d-flex align-items-center">
              <p>Language: <country-flag :country="LanguageFlag(movie.original_language)"/></p>
            </p>
            <p v-html="state.generateStars(state.generateScore1_5(movie.vote_average))"></p>
        </div>
    </div>
    <!-- ./movies -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
        <div class="col" v-for="(tvShow, index) in state.fetchedTvShows">
            <h3> Tv Show {{ index }}</h3>
            <div class="imgShow img-fluid">
                <img v-if="tvShow.poster_path" :src="`${state.imageBaseUrl}${tvShow.poster_path}`"
                    :alt="`${tvShow.title} cover image`">
            </div>
            <p>Title: {{ tvShow.name }}</p>
            <p>Original title: {{ tvShow.original_name }}</p>
            <p class="d-flex align-items-center">
                <p>Language: <country-flag :country="LanguageFlag(tvShow.original_language)"/></p>
            </p>
            <p v-html="state.generateStars(state.generateScore1_5(tvShow.vote_average))"></p>
        </div>
    </div>
    <!-- ./tvShow  -->
</template>

<style></style>