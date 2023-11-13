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
        <ul class="card-info">
            <li><span class="weight">Titolo:</span> {{ item.name }}</li>
            <li><span class="weight">Titolo originale:</span> {{ item.original_name }}</li>
            <li><span class="weight">Lingua:</span> {{ item.original_language }} <country-flag :country='item.original_language' size='normal'/></li>
            <li><span class="weight">Voto:</span> {{ parseInt(item.vote_average / 2) }} <font-awesome-icon v-for="n in parseInt(item.vote_average / 2)" :key="n" icon="fa-solid fa-star" size="xs" style="color: #ffb43f;" /></li>
            <li class="overview"><span class="weight">Overview:</span> <span class="size">{{ item.overview }}</span></li>
        </ul>
        <figure>
            <img class="img" :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path" alt="">
        </figure>
    </div>
</template>

<style lang="scss" scoped>
.card {
    flex-basis: calc((100% * 4 / 12));
    flex-grow: 1;
    padding-left: 25px;
    min-width: 200px;
    display: flex;

    .card-info {
        padding: 20px 0;
        max-width: 200px;
        line-height: 20px;
        background-color: black;
        color: white;
        font-size: 13px;
        padding: 5px 15px;
        border: 2px solid white;
        display: none;

        .weight {
            font-size: 15px;
            font-weight: 700;
            text-decoration: underline;
        }
        .size {
            font-size: 11px;
        }
    }
 .img {
    border: 2px solid white;
 }
}

.card:hover {
    .card-info {
        display: block;
    }
}
</style>