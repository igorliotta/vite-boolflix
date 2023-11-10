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
    methods: {
        sendText() {
            this.sented = true;
            this.currentText = store.searchedText;
            console.log('Testo mandato', store.searchedText)
        },
        searchMovies() {
        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchedText,
          }
        })
        .then(res=> {
          console.log(res.data.results);
          this.store.movies = res.data.results;
        })
      }
    }
}
</script>

<template>
    <header class="header">
       <div class="container">
        <p>Logo</p>
        <div>
            <input type="text" placeholder="Cerca il contenuto" v-model="store.searchedText"  @keyup.enter="searchMovies()">
            <button @click="searchMovies()" class="button">Search</button>
        </div>
       </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    width: 900px;
    padding: 5px;
    border: 1px solid black;
    margin: 0 auto;

    .container {
        margin: 0 auto;
        border: 1px solid red;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }

}

</style>