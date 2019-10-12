// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
import './assets/tables.scss'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fabDiscord } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vueScrollTo from 'vue-scrollto'
// import { dom } from '@fortawesome/fontawesome-svg-core'

// dom.watch()
library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import Vue from 'vue'
import App from './App'

import VueParticles from './vue-particles'
import VuePrism from 'vue-prism'
Vue.use(vueScrollTo)
Vue.use(Buefy)
Vue.use(VueParticles, VuePrism)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
