<script>
import { state } from "../state"
import CountryFlag from 'vue-country-flag-next'
export default {
    name: "ShowsComponent",
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
            <div class="col" v-for="(tvShow, index) in state.fetchedTvShows">
                <h3> Tv Show {{ index }}</h3>
                <div class="imgShow">
                    <img v-if="tvShow.poster_path" :src="`${state.imageBaseUrl}${tvShow.poster_path}`"
                        :alt="`${tvShow.title} cover image`">
                </div>
                <p>Title: {{ tvShow.name }}</p>
                <p>Original title: {{ tvShow.original_name }}</p>
                <p class="d-flex align-items-center">
                <p>Language: <country-flag :country="flagLingue(tvShow.original_language)" /></p>
                </p>
                <p v-html="state.generateStars(state.generateScore1_5(tvShow.vote_average))"></p>
                <p> Overview : {{ tvShow.overview }}</p>
            </div>
        </div>
</template>


<style></style>