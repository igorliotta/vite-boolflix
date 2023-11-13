import { reactive } from 'vue';

export const store = reactive({
    searchedText: '',
    movies: [],
    series: [],
    API_KEY: 'f165f4b073145d62e003e531bb70916f',
})