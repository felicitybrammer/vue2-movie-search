<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home' }"><h1>Movie Search</h1></router-link>
      <nav>
        <p>Nav links here?</p>
      </nav>
    </header>
    <router-view />
    <footer>Made by Felicity</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
