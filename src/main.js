// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import mixpanel from 'mixpanel-browser'

mixpanel.init('5fbd1f3532c9111fee31a61c8132bc25')
mixpanel.track('Page View')
export { mixpanel }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
