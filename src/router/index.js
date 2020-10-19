import vue from 'vue'
import Router from 'vue-router'
import Sidebar from '../components/Sidebar.vue'


vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {path:'/sidebar' ,name:'sidebar', component:Sidebar}
  ]
})