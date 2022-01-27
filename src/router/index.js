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
    path: "/crearempresa",
    name: "crear",
    component: () => import("@/components/empresas/CrearEmpresa.vue"),
  },
  {
    path: "/editarempresa",
    name: "editar",
    component: () => import("@/components/empresas/EditarEmpresa.vue"),
  },
  {
    path: "/empresas",
    name: "empresas",
    component: () => import("../views/Empresas.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () => import("@/components/contacto/Contacto.vue"),
  },
  {
    path: "/empresa/:empresa",
    name: "empresa",
    component: () => import("../views/Empresa.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
