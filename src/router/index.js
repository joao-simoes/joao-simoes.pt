import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/App.vue";
import About from "../views/about/App.vue";
import Work from "../views/work/App.vue";
import Oops from "../views/oops/App.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/*",
    name: "404",
    component: Oops,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
