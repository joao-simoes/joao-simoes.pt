<template>
  <div id="app">
    <vue-page-transition name="overlay-right-full">
    <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<style>
  .overlay-left,  .overlay-right,  .overlay-top,  .overlay-bottom {
    background: #111111 !important;
  }
</style>
