import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import MovieDetails from '../views/MovieDetails.vue'
import NotFoundComponent from '../views/FileNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsView
  },
  {
    path: '/movieDetails/:title',
    name: 'details',
    component: MovieDetails,
    props: true
  },
  {
    path: '*',
    component: NotFoundComponent
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})


