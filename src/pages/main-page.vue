<template>
    <div class="main-page">
        <custom-header></custom-header>
        <movie-list></movie-list>
    </div>
</template>
    
<script>
import CustomHeader from '@/components/custom-header.vue';
import MovieList from '@/components/movie-list.vue';

export default {

    components: {
        CustomHeader,
        MovieList
    }

}
</script>
    
<style lang="scss" scoped>
.main-page {
    width: 100vw;
    height: 100vh;
}
</style>