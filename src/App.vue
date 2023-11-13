<script>

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import { store } from './store';
import axios from 'axios'

export default {
  components: {
      Header,
      MainContent,
    },
    data() {
      return {
        store: store,
        API_KEY: 'f165f4b073145d62e003e531bb70916f',
      }
    }, 
    methods: {
      searchMovies() {

        if(this.store.searchedText === '') {
          store.movies = []
          store.series = []
          return
        }

        axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchedText,
            language: 'it-IT'
          }
        })
        .then(res=> {
          console.log(res.data.results);
          this.store.movies = res.data.results;
          this.store.movies = store.movies;
        })
      },
      searchSeries() {
        if(this.store.searchedText === '') {
          store.movies = []
          store.series = []
          return
        }

        axios.get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: this.store.API_KEY,
            query: this.store.searchedText,
            language: 'it-IT'
          }
        })
        .then(res=> {
          console.log(res.data.results);
          this.store.series = res.data.results;
          this.store.series = store.series;
        })
      }
    }
}
  

</script>

<template>
    <Header @searchMovies="searchMovies" @searchSeries="searchSeries" />
    <MainContent />
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
