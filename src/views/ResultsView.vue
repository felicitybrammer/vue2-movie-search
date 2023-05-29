<template>
  <div class="results">
    <h1>Results for {{  }}</h1>
    <!-- import movie list component here -->
    <MovieCard />
  </div>
</template>


<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'ResultsView',
  components: {
    MovieCard
  }
}
</script>