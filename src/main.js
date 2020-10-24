import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Grid from './components/Grid.vue'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const Store = new Vuex.Store(
  {
    state: {
      authenticated : false
    },
    mutations: {
      setAuthentication(state, status){
        state.authenticated = status;
      }
    }
  }
);

const router = new VueRouter({
  routes: [
    {
      path:'/',
      redirect:{
        name:'login'
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/grid',
      name:'grid',
      component:Grid,
      beforeEnter:(to, from, next) =>{
        if(Store.state.authenticated == false){
          next(false)
        }else{
          next();
        }
      }
    }
  ]
})
new Vue({  
  Store : Store,
  router : router,
  render: h => h(App),
}).$mount('#app')
