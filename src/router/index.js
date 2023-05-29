import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultsView from '../views/ResultsView.vue'
import movieDetails from '../views/movieDetails.vue'
import notFoundComponent from '../views/FileNotFound.vue'

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
    component: movieDetails,
    props: true
  },
  {
    path: '*',
    component: notFoundComponent
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})


