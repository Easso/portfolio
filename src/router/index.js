import { createRouter, createWebHashHistory } from 'vue-router'
import PostProject from '../components/PostProject.vue'

const routes = [
  {
    path: '/post',
    name: 'Post',
    component: PostProject
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
