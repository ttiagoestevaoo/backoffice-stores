import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Import from "../views/ImportTransactions.vue";
import Stores from "../views/Stores.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/importacao",
    name: "Import",
    component: Import,
  },
  {
    path: "/lojas",
    name: "Stores",
    component: Stores,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
