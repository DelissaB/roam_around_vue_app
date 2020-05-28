import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StylesIndex from "../views/StylesIndex.vue";
import RequestsIndex from "../views/RequestsIndex.vue";
import LocationsIndex from "../views/LocationsIndex.vue";
import PluckShow from "../views/PluckShow.vue";
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/styles",
    name: "styles-index",
    component: StylesIndex,
  },
  {
    path: "/requests",
    name: "requests-index",
    component: RequestsIndex,
  },
  {
    path: "/locations",
    name: "locations",
    component: LocationsIndex,
  },
  {
    path: "/pluck/:id",
    name: "pluck-show",
    component: PluckShow,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
