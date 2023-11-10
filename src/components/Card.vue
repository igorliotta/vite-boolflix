<script>

import { store } from '../store'

export default {
    data() {
        return {
            store: store,
        }
    }
   
}
</script>

<template>
    <div class="card" v-for="(movie, i) in store.movies" :key="i">
        <div class="card-info">
            <p>Titolo: {{ movie.title }}</p>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
</style>