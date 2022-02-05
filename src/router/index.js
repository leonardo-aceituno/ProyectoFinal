import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAuth as auth } from 'firebase/auth';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/administrador',
    name: 'administrador',
    component: () => import('../views/Administrador.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/crearempresa',
    name: 'crear',
    component: () => import('@/components/empresas/CrearEmpresa.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/editarempresa',
    name: 'editar',
    component: () => import('@/components/empresas/EditarEmpresa.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/eliminarempresa',
    name: 'eliminar',
    component: () => import('@/components/empresas/EliminarEmpresa.vue'),
    meta: { authRequired: true },
  },
  {
    path: '/empresas',
    name: 'empresas',
    component: () => import('../views/Empresas.vue'),
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/components/contacto/Contacto.vue'),
  },
  {
    path: '/empresa/:empresa',
    name: 'empresa',
    component: () => import('../views/Empresa.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  let user = auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.authRequired);
  if (!user && authRequired) {
    next('administrador');
  } else if (user && !authRequired) {
    next();
  } else {
    next();
  }
});

export default router;
