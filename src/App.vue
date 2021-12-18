<template>
  <div id="app">
    <vue-page-transition name="overlay-right-full">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<style lang="scss" >
$urbanist: "Urbanist", sans-serif;

#app {
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: $urbanist;
  background-image: url("./assets/img/bg.svg");
  object-fit: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #111111 !important;
}
</style>
