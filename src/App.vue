<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background: $dark-blue;
}

p {
  @include large-text;
}

#app {
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
