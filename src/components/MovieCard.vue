<template>
  <router-link class="movie-card" :to="{ name: 'details', params: { title: 'Titanic' } }">
    <div class="">
      <h4>{{ title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      title: 'Test Title'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.movie-card {
  color: red;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
