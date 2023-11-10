<script>

import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import { store } from './store'

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
    }
}
  

</script>

<template>
    <Header />
    <MainContent />
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
