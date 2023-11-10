<script>
import { store } from '../store'

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
        }
    }
}
</script>

<template>
    <header class="header">
       <div class="container">
        <p>Logo</p>
        <div>
            <input type="text" placeholder="Cerca il contenuto" v-model="store.searchedText"  @keyup.enter="sendText()">
            <button @click="sendText()" class="button">Search</button>
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