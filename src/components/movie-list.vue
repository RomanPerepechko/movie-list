<template>
    <div class="movie-list">
        <div v-if="isLoading" class="movie-list__loader-container">
            <loader></loader>
        </div>
        <filter-block v-if="movies.length > 0" :filters="filters" @toggle-filter="toggleFilter"></filter-block>
        <movie-card v-for="movie in movies" :key="movie.id" :movie="movie"></movie-card>
    </div>
</template>

<script>
import axios from 'axios';
import MovieCard from './movie-card.vue';
import FilterBlock from './filter-block.vue';
import Loader from './UI/loader.vue';
import { mapActions } from 'vuex';

export default {
    
    methods: {
        ...mapActions([
            'setMovieList'
        ]),

        async fetchMovies() {
            this.isLoading = true;
            let result = await axios.get('https://floating-sierra-20135.herokuapp.com/api/movies');
            this.movies = result.data.data;
            this.setMovieList(this.movies);
            this.isLoading = false;
        },

        toggleFilter(type) {
            this.filters[type] = !this.filters[type];
            for(let i in this.filters){
                if (i !== type){
                    this.filters[i] = false;
                }
            }
            this.sortMovies();
        },
        
        sortMovies() {
            this.isLoading = true;
            if(this.filters.name){
                this.movies.sort((pMovie,nMovie)=>{
                    return (pMovie.title.toLowerCase()).localeCompare(nMovie.title.toLowerCase(),'en');
                });
                return this.isLoading = false;
            }
            if(this.filters.year){
                this.movies.sort((pMovie,nMovie)=>{
                    return (pMovie.year - nMovie.year);
                });
                return this.isLoading = false;
            }
            this.fetchMovies();
        }
    },

    data() {
        return {
            movies: [],
            isLoading: false,
            filters: {
                name: false,
                year: false
            }
        }
    },

    mounted() {
        this.fetchMovies();
    },

    components: {
        MovieCard,
        FilterBlock,
        Loader
    }

}
</script>

<style lang="scss" scoped>
.movie-list{
    min-height: 100vh;
    height: auto;
    width: 100%;
    padding-left: 14%;
    padding-right: 14%;
    background-color: #363232;

    &__loader-container{
        width: 100%;
        height: calc(100vh - 100px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>