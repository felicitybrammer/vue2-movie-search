<template>
  <div class="results">
    <h1>Results for {{ results.titleText  }}</h1>
    <!-- import movie list component here -->
    <MovieCard v-for="result in results" :key="result.id" :result="result"/>
  </div>
</template>


<script>
import MovieCard from '@/components/MovieCard.vue'
import MovieService from'@/services/movieService.js'


export default {
  props: {
    movieTitle: this.index.titleText.text
  },
  components: {
    MovieCard
  },
  data() {
    return {
      results: [
        {
          index: {
            id: 0,
            primaryImage: {
              url: '',
              caption: ''
            },
            titleText: {
              text: ''
            },
            releaseDate: {
              year: ''
            }
          }
        }
      ]
    }
  },
  created() {
    MovieService.getMovieResults()
      .then(response => {
        this.results = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response) 
      })
  }
  
}
</script>