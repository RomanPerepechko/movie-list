import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
      movieList: []
    },
    mutations: {
      SET_MOVIE_LIST(state, payload){
        state.movieList = payload.movies;
      }
    },
    actions: {
        setMovieList({ commit }, payload){
            commit('SET_MOVIE_LIST', { movies: payload });
        }
    },
    getters: {
        getMovieList(state){
            return state.movieList;
        }
    }
  })

  export default store