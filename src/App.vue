<template>
<div class="app">
  <Navbar />
<Sidebar />
<Grid />

</div>

</template>

<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Grid from './components/Grid.vue'


export default {
  name: 'App',
  components: {
    Navbar,Sidebar,Grid
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
