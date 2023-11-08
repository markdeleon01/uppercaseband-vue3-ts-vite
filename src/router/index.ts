import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import NotFound from '../views/NotFound.vue'
import NetworkIssue from '../views/NetworkIssue.vue'

import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '/',
      name: 'home-view',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/discography',
      name: 'discography-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DiscographyPage.vue')
    },
    {
      path: '/events',
      name: 'events-view',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventsPage.vue')
    },
    {
      path: '/:catchAll(.*)', // will catch all navigation that doesn't match any of the routes above this entry in the array
      redirect: { name: 'not-found', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  // global route guard: start the progress bar when routing begins
  NProgress.start()
  next()
})

router.afterEach(() => {
  // global route guard: finish the progress bar when routing is about to end
  NProgress.done()
})

export default router
