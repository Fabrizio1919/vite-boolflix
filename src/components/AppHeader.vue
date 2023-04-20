<script>
import { state } from "../state"
export default {
    name: "AppHeader",
    data() {
        return {
            state
        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar">
        <div class="container-fluid">
            <div class="imgLogo img-fluid h-10">
                <img src="../assets/img/Netflix-logo (1).png" alt="">
            </div>
            <div class="d-flex" role="search">
                <input class="form-control me-2" @keyup.enter="state.generateMovie()" type="search" v-model.trim="state.searchText">
                <button class="btn btn-outline-danger" @click="state.generateMovie()">Search</button>
            </div>
        </div>
    </nav>
    </header>
</template>


<style></style>