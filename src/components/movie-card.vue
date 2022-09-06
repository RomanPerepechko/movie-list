<template>
  <div class="movie-card" :class="{'in-movie-list':$route.path ==='/movies'}">

    <div class="movie-card__poster">
      <div class="movie-card__poster-wrapper"
        :style="`background-image:url(http://www.kinopoisk.ru/images/film_big/${movie.poster.split('//images.kinopoisk.cloud/posters/').join('')})`"></div>
    </div>

    <div class="movie-card__content">
      <div v-if="movie.title && $route.path!='/movies'" class="movie-card__title">{{movie.title}}</div>
      <div v-if="movie.title && $route.path ==='/movies'" @click="$router.push({path: `movie/${movie.id}`})" class="movie-card__title in-movie-list" >{{movie.title}}</div>
      <div v-if="movie.genres && movie.year" class="movie-card__info">{{`${movie.year}, ${movie.genres.join(', ')}`}}</div>
      <div v-if="movie.directors" class="movie-card__directors">{{`режиссер: ${movie.directors}`}}</div>
      <div v-if="movie.actors" class="movie-card__actors">актеры:<span>{{movie.actors.join(', ')}}</span></div>
    </div>

    <div v-if="movie.collapse.duration" class="movie-card__sticker">
      {{movie.collapse.duration[0]}}
    </div>

  </div>
</template>

<script>

export default {

  props: [
    'movie'
  ]

}
</script>

<style lang="scss" scoped>
.movie-card {
  width: 100%;
  min-height: 168px;
  background: #4D4747;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 24px;
  display: flex;
  position: relative;
  transition: all 0.5s ease-in;

  &.in-movie-list{
    &:hover{
      transform: translateY(-8px);
      box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.25);
    }
  }

  

  &__poster {
    width: 168px;
    height: auto;
    background: #C4C4C4;
  }

  &__poster-wrapper {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  &__content {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 24px 32px 24px;
  }

  &__title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: #FFFFFF;
    margin-bottom: 12px;
    

    &.in-movie-list{
      cursor: pointer;
    }
  }

  &__info {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #988F8F;
    margin-bottom: 8px;
  }

  &__directors {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #988F8F;
    margin-bottom: 10px;
  }

  &__actors {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    color: #988F8F;

    span {
      font-weight: 400;
      line-height: 16px;
      color: #E5E5E5;
      margin-left: 7px;
    }
  }

  &__sticker{
    width: 184px;
    height: 30px;
    background: #C4C4C4;
    position: absolute;
    top: 32px;
    right: 0px;
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #000000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
  }

}
</style>