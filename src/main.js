// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import filters from './filters'

Vue.use(mavonEditor)
Vue.config.devtools = true
Vue.use(iView)
const UserPromise = store.dispatch('initUserInfo')
window.store = store
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

store.dispatch('getCategories')
store.dispatch('getClassifications')

UserPromise.then(() => {
  const el = document.getElementById('preloader')
  el.parentNode.removeChild(el)

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
