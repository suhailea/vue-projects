<template>
<div class="app">
   <Navbar />
    <Sidebar />
    <!-- <Input />
    <Grid />   --> -->
  <router-view></router-view>
  

</div>

</template>

<script>
 import Navbar from './components/Navbar.vue'
 import Sidebar from './components/Sidebar.vue'
// import Input from './components/Input.vue'

//  import Grid from './components/Grid.vue'


export default {
  name: 'App',
  components: {
     Navbar,Sidebar
  },
  methods:{
    saveData(e){
      console.log(e)
    }
  }
}
</script>

<style>

</style>
