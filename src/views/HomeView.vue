<template>
  <div class="home">
    <form class="search-form" id="movie-title" @submit.prevent="search">
      <label for="movie-title" >Search for a movie:</label>
    
      <input type="text" v-model="movieTitle">
      <router-link :to="{ name: 'results' }">
        <button>Search</button>
      </router-link>

    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        movieTitle: ''
      }
    }
  }
</script>

<style>
  #movie-title {
    padding: 10px;
  }
</style>




