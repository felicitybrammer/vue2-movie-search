<template>
  <div class="results">
    <h1 :movie-title="movieTitle">Results for {{ this.movieTitle }}</h1>
    <!-- import movie list component here -->
    <MovieCard v-for="result in results" :key="result.id" :result="result" />
  </div>
</template>


<script>
import MovieCard from '@/components/MovieCard.vue'
import MovieService from '@/services/movieService.js'


export default {
  props:
    ["movieTitle"]
  ,
  components: {
    MovieCard
  },
  data() {
    return {
      results: [
        {
          0: {
            id: 0,
            // primaryImage: {
            //   url: '',
            //   caption: ''
            // },
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
  async created() {
    try {
      this.results = await MovieService.getMovieResults(this.movieTitle)
    }
    catch (error) {
      console.log('There was an error:', error.response)
    }
  }

}
</script>