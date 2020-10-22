import vue from 'vue'
import Router from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Input from '../components/Input.vue'
import Grid from '../components/Grid.vue'
import App from '../App.vue'



vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {path:'/sidebar', component:Sidebar},
    {path:'/input', component:Input},
    {path:'/grid', component:Grid},
    {path:'/home', component:App}
  ]
})