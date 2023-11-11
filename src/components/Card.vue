<script>

import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'
// import LangFlag from 'vue-lang-code-flags';

export default {
    components: {
        CountryFlag,
        // LangFlag,
    },
    data() {
        return {
            store: store,
        }
    },
   methods: {
    setFlag() {
      
    }
   }
   
}
</script>

<template>
    <div class="card" v-for="(movie, i) in store.movies" :key="i">
        <div class="card-info">
            <p>Titolo: {{ movie.title }}</p>
            <p>Titolo originale: {{ movie.original_title }}</p>
            <p>Lingua: <country-flag :country='movie.original_language' size='normal'/></p>
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