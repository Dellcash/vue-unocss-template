import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      component: () => import('../layouts/AuthLayout.vue'),
      redirect: '/auth/login',
      children: [
        {
          path: 'register',
          name: 'Register',
          meta: { title: 'Register' },
          component: () => import('../pages/auth/view/register/IndexPage.vue')
        },
        {
          path: 'login',
          name: 'Login',
          meta: { title: 'Login' },
          component: () => import('../pages/auth/view/login/IndexPage.vue')
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
