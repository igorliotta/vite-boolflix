<script>

import { store } from '../store';
import CountryFlag from 'vue-country-flag-next'

export default {
    components: {
        CountryFlag,
    },
    data() {
        return {
            store: store,
        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
    methods: {
      setFlag() {
      
    }
   }
}
</script>

<template>
    <div class="card">
        <div class="card-info">
            <p>Titolo: {{ item.title }}</p>
            <p>Titolo originale: {{ item.original_title }}</p>
            <p>Lingua: <country-flag :country='item.original_language' size='normal'/></p>
            <p>Voto: {{ item.vote_average }}</p>
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