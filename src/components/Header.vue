<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store: store,
            currentText: '',
            sented: false,
        }
    },
    // methods: {
    //     sendText() {
    //         this.sented = true;
    //         this.currentText = store.searchedText;
    //         console.log('Testo mandato', store.searchedText)
    //     },
    //     searchMovies() {
    //     axios.get('https://api.themoviedb.org/3/search/movie', {
    //       params: {
    //         api_key: this.store.API_KEY,
    //         query: this.store.searchedText,
    //       }
    //     })
    //     .then(res=> {
    //       console.log(res.data.results);
    //       this.store.movies = res.data.results;
    //     })
    //   }
    // }
}
</script>

<template>
    <header class="header">
       <div class="container">
        <figure class="logo">
            <img src="boolflix-logo.png" alt="">
        </figure>
        <div>
            <input type="text" placeholder="Cerca il contenuto" class="search-bar" v-model.trim="store.searchedText"  @keyup.enter="$emit('searchMovies'), $emit('searchSeries')" >
            <button @click="$emit('searchMovies')" class="button">Search</button>
        </div>
       </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 1200px;
    padding: 4px 25px;
    background-color: black;
    margin: 0 auto;

    .container {
        margin: 0 auto;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            width: 250px;
            padding: 10px;
        }
    }

    .search-bar {
        width: 250px;
        height: 30px;
    }

    .button {
        padding: 5px;
        height: 30px;
    }

}

</style>