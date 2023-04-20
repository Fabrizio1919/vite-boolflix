<script>
import MoviesComponent from "./MoviesComponent.vue"
import ShowsComponent from "./ShowsComponent.vue"
export default {
    name: "AppMain",
    components: {
        MoviesComponent,
        ShowsComponent
    }
}
</script>

<template>
    <main>
        <div class="container">
            <MoviesComponent></MoviesComponent>
            <ShowsComponent></ShowsComponent>
        </div>
    </main>
</template>

<style></style>