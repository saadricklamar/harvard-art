import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Images",
      name: "Images",

      component: () => import("./views/Images.vue")
    },
    {
      path: "/Galleries",
      name: "Galleries",
      component: () => import("./views/Galleries.vue")
    },
    {
      path: "/Sites",
      name: "Sites",
      component: () => import("./views/Sites.vue")
    },
    {
      path: "/Audio",
      name: "Audio",
      component: () => import("./views/Audio.vue")
    }
  ]
});
