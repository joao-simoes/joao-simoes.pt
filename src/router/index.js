import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/App.vue";
import About from "../views/about/App.vue";
import Work from "../views/work/App.vue";
import Contacts from "../views/contacts/App.vue";
import Oops from "../views/oops/App.vue";

Vue.use(VueRouter);

<<<<<<< HEAD
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
=======
const routes = [{
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
    routes,
>>>>>>> b5701a4f16ff9598aae5156a8bbe8667a10cce4a
});

export default router;
