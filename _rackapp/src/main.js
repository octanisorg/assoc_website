// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Splash from './components/Splash.vue'
import Items from './components/Items.vue'
import ItemBooking from './components/ItemBooking.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({

  mode: 'hash',
  base: '/',
  routes: [
    { path: '/', component: Splash },
    { path: '/items', component: Items },
    { name: 'item', path: '/items/:id', component: ItemBooking },
    { path: '*', component: NotFound }

  ]
})

 new Vue({
   router,
   el: '#app',
   render: h => h(App)
 });
