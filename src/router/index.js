import { createRouter, createWebHistory } from 'vue-router'
import Main from "../views/Main";
import List from "../views/List";
import Converter from "../views/Converter";


const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/converter',
    component: Converter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
