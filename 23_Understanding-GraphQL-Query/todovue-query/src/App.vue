<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Todo</router-link> |
      <router-link to="/todo">Nama</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.2rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
