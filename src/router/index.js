import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/administrador",
    name: "administrador",

    component: () => import("../views/Administrador.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",

    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/crear_empresa",
    name: "crear",

    component: () => import("@/components/empresas/CrearEmpresa.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
