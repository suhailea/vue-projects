import vue from 'vue'
import Router from 'vue-router'
import Sidebar from '../components/Sidebar.vue'


vue.use(Router)

export default new Router({
  routes:[
    {path:'/sidebar' ,name:'sidebar', component:Sidebar}
  ]
})