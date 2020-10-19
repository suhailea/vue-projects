<template>
  <div id="app">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Navbar />
    <Sidebar/>
    <Form  @onSave="saveData"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Form from './components/Input.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,Navbar,Sidebar,Form
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
