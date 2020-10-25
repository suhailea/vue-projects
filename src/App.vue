<template>
  <div class="app">
    <Navbar />
    <Sidebar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
  },
  methods: {
    saveData(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>
