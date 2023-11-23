import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Reactivity',
      component: () => import('../views/Reactivity.vue')
    },
    {
      path: '/template-syntax',
      name: 'TemplateSyntax',
      component: () => import('../views/TemplateSyntax.vue')
    },
    {
      path: '/event-handling',
      name: 'EventHandling',
      component: () => import('../views/EventHandling.vue')
    },
    {
      path: '/form-input-bindings',
      name: 'FormInputBinding',
      component: () => import('../views/FormInputBinding.vue')
    },
    {
      path: '/watchers',
      name: 'Watchers',
      component: () => import('../views/Watchers.vue')
    },
    {
      path: '/lifecycle-hooks',
      name: 'LifeCycleHooks',
      component: () => import('../views/LifeCycleHooks.vue')
    },
    {
      path: '/template-refs',
      name: 'TemplateRefs',
      component: () => import('../views/TemplateRefs.vue')
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('../views/Components.vue')
    },
    {
      path: '/slots',
      name: 'Slots',
      component: () => import('../views/Slots.vue')
    },
    {
      path: '/transitions',
      name: 'Transitions',
      component: () => import('../views/Transitions.vue')
    },
    {
      path: '/plugins',
      name: 'Plugins',
      component: () => import('../views/Plugins.vue')
    },
    {
      path: '/vue-router',
      name: 'VueRouter',
      component: () => import('../views/VueRouter.vue')
    },
    {
      path: '/ecosystem',
      name: 'Ecosystem',
      component: () => import('../views/Ecosystem.vue')
    }
  ]
})

export default router
