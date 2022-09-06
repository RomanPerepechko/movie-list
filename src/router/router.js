import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/main-page.vue";
import MoviePage from "@/pages/movie-page.vue"

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: "/movies"
    },
    {
      path: "/movies",
      component: MainPage,
    },
    {
      path: '/movie/:id', 
      component: MoviePage
    }
  ]
});
export default router;