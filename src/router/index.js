import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IngresoActivo from '../components/IngresoActivo.vue'
//import EditarActivo from '../components/EditarActivo.vue'
import ListarActivos from '../components/ListarActivos.vue'
import ListarBio from '../components/ListarBio.vue'
import ListarInf from '../components/ListarInf.vue'
import ListarSis from '../components/ListarSis.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/ingresoactivo',
    name: 'IngresoActivo',
    component: IngresoActivo
  },
  {
    path: '/listaractivos',
    name: 'ListarActivos',
    component: ListarActivos
  },
  {
    path: '/listaractivos/bio',
    name: 'ListarBio',
    component: ListarBio
  },
  {
    path: '/listaractivos/inf',
    name: 'ListarInf',
    component: ListarInf
  },
  {
    path: '/listaractivos/sis',
    name: 'ListarSis',
    component: ListarSis
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
