import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: 'home',
    component: ()=>import ('../views/index.vue'), 
  }
]

const route = createRouter({
  
})