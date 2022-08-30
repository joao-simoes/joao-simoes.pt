import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Index/App.vue";
import About from "../views/About/App.vue";
import Work from "../views/Work/App.vue";
import Contacts from "../views/contacts/App.vue";
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
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
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
