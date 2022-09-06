<template>
    <custom-header></custom-header>
    <div class="movie-page">
        <div @click="$router.push({path:'/'})" class="movie-page__bread">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.67 1.86998L9.9 0.0999756L0 9.99998L9.9 19.9L11.67 18.13L3.54 9.99998L11.67 1.86998Z"
                    fill="#FF5252" fill-opacity="0.98" />
            </svg>

            <span>Назад к списку</span>
        </div>
        <movie-card v-if="movie" :movie="movie"></movie-card>
        <div class="movie-page__loader-container">
            <loader v-if="isLoading"></loader>
        </div>
        <span class="movie-page__error" v-if="!isLoading && !movie">К сожалению, по вашему запросу ничего не найдено...</span>
    </div>
</template>

<script>
import axios from 'axios';
import CustomHeader from '@/components/custom-header.vue';
import MovieCard from '@/components/movie-card.vue';
import Loader from '@/components/UI/loader.vue';
import { mapGetters } from 'vuex';

export default {

    data(){
        return{
            movie: null,
            isLoading: false,
            prevRoute: null
        }
    },

    mounted(){
        if(this.prevRoute.path === '/movies'){
            this.movie = this.movies.find(el=>el.id == this.$route.params.id)
        }else{
            this.fetchMovie();
        }
    },

    methods:{
        async fetchMovie(){
            this.isLoading = true;
            let result = await axios.get(`https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`);
            if(result.data.data){
                this.movie = result.data.data;
            }
            this.isLoading = false;
        }
    },

    computed:{
        ...mapGetters({
            movies: 'getMovieList'
        })
    },

    components: {
        CustomHeader,
        MovieCard,
        Loader
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from
        })
    },

}
</script>

<style lang="scss" scoped>
.movie-page {
    min-height: 100vh;
    height: auto;
    width: 100%;
    padding-left: 14%;
    padding-right: 14%;
    background-color: #363232;

    &__bread {
        cursor: pointer;
        display: flex;
        padding-top: 42px;
        margin-bottom: 48px;
        border-bottom: 1px solid #C4C4C4;

        span {
            margin-bottom: 22px;
            margin-left: 16px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 20px;
            text-decoration-line: underline;
            color: rgba(255, 82, 82, 0.98);
        }
    }

    &__error{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        color: #FFFFFF;
    }

    &__loader-container{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
}
</style>