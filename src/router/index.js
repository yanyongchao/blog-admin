import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

const UserPromise = store.dispatch('initUserInfo')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        import('@/views/auth/login').then(resolve)
      }
    },
    {
      path: '/401',
      name: 'noAuth',
      component: resolve => {
        import('@/views/error/401').then(resolve)
      }
    },
    {
      path: '/500',
      name: 'serverError',
      component: resolve => {
        import('@/views/error/500').then(resolve)
      }
    },
    {
      path: '/',
      component: resolve => {
        import('@/views/common/layout').then(resolve)
      },
      children: [
        {
          path: '/article/list',
          name: 'article-list',
          component: resolve => {
            import('@/views/article/list').then(resolve)
          }
        },
        {
          path: '/article/add',
          name: 'article-add',
          component: resolve => {
            import('@/views/article/add').then(resolve)
          }
        },
        {
          path: '/article/:id/edit',
          name: 'article-edit',
          component: resolve => {
            import('@/views/article/edit').then(resolve)
          }
        },
        {
          path: '/category/all',
          name: 'category-all',
          component: resolve => {
            import('@/views/category/all').then(resolve)
          }
        },
        {
          path: '/classification/all',
          name: 'classification-all',
          component: resolve => {
            import('@/views/classification/all').then(resolve)
          }
        },
        {
          path: '/classification/',
          name: 'classification-add',
          component: resolve => {
            import('@/views/classification/add').then(resolve)
          }
        },
        {
          path: '/category/add',
          name: 'category-add',
          component: resolve => {
            import('@/views/category/add').then(resolve)
          }
        },
        {
          path: '/user',
          name: 'user',
          component: resolve => {
            import('@/views/user/info.vue').then(resolve)
          }
        },
        {
          path: '/',
          redirect: '/article/list'
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      component: resolve => {
        import('@/views/error/404.vue').then(resolve)
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  UserPromise.then(() => {
    if (!store.getters.logined) {
      if (to.path !== '/login') {
        next('/login')
      } else {
        next()
      }
    } else {
      if (to.path === '/login') {
        next(false)
      } else {
        next()
      }
    }
  })
})

export default router
