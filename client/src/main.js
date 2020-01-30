import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, numeric } from 'vee-validate/dist/rules'
Vue.config.productionTip = false

extend('email', {
  ...email,
  message: 'Email is not valid'
})

extend('numeric', {
  ...numeric,
  message: 'The {_field_} must be numeric'
})

extend('min', {
  validate(value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'The {_field_} field must have at least {length} characters'
})

extend('required', {
  ...required,
  message: 'This field is required'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
