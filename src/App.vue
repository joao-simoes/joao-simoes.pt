<template>
  <div id="app">
    <vue-page-transition name="overlay-right-full">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<style>
#app {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #111111 !important;
}
</style>
