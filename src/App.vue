<script>

import Header from './components/Header.vue';
import { store } from './store'
import axios from 'axios'

export default {
  components: {
      Header,
    },
    data() {
      return {
        store: store,
        API_KEY: 'f165f4b073145d62e003e531bb70916f',
      }
    },
    methods: {
      fetcheMovies() {
        axios.get()
      }
    }
    }
  }

</script>

<template>
    <Header />
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
