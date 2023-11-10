<script>

import Card from './Card.vue';
import { store } from '../store'

export default {
    components: {
        Card,
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
            <Card />
        </div>
    </div>
</main>
</template>

<style lang="scss" scoped>
.main-content {
    width: 900px;
    border: 1px solid black;
    margin: 0 auto;
    padding: 10px 0;

    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 3px;
    }
}
</style>