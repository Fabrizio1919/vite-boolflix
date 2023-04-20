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
            <h5 class="text-center"> Tv Show {{ index }}</h5>
            <div class="imgShow">
                <img v-if="tvShow.poster_path" :src="`${state.imageBaseUrl}${tvShow.poster_path}`"
                    :alt="`${tvShow.title} cover image`">
            </div>
            <ul class="info">
                <li>Title: {{ tvShow.name }}</li>
                <li>Original title: {{ tvShow.original_name }}</li>
                <li class="d-flex align-items-center">
                <li>Language: <country-flag :country="flagLingue(tvShow.original_language)" /></li>
                </li>
                <li v-html="state.generateStars(state.generateScore1_5(tvShow.vote_average))"></li>
                <li> Overview : {{ tvShow.overview }}</li>
            </ul>
        </div>
    </div>
</template>


<style></style>