<script>

import CardMovies from './CardMovies.vue';
import CardSeries from './CardSeries.vue';
import { store } from '../store'

export default {
    components: {
        CardMovies,
        CardSeries,
    },
    data() {
        return {
            store: store,
        }
    }
}
</script>

<template>
<main class="main-content">
    <div class="container">
        <div class="row">
            <div class="movies-list">
                <h2>Film trovati:</h2>
            </div>
            <CardMovies v-for="movie in store.movies" :key="movie.id" :item="movie" />
            <div v-if="!store.movies.length">
                Nessun film da mostrare!
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="series-list">
                <h2>Serie-tv trovate:</h2>
            </div>
            <CardSeries v-for="serie in store.series" :key="serie.id" :item="serie" />
            <div v-if="!store.series.length">
                Nessuna serie-tv da mostrare!
            </div>
        </div>
    </div>
</main>
</template>

<style lang="scss" scoped>
.main-content {
    width: 900px;
    border: 1px solid black;
    margin: 0 auto;
    padding: 10px;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 3px;
    }

    .movies-list,
    .series-list {
        width: 100%;
        text-align: center;
        padding: 20px;
    }
}
</style>