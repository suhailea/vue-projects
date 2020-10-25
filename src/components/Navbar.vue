<template>
  <div class="navbar">
    <div class="navbar-items">  
     <ul>
       <router-link to="/test"><li><a href="">Home</a></li></router-link>
       
       <li><a href="">About</a></li>
       <router-link to="/input"><li><a href="">Register</a></li></router-link>
       <router-link to="/grid"><li><a href="">Countries</a></li></router-link>
        <router-link to="/login"><li><a href="">Login</a></li></router-link>
     </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        isAuth:localStorage.getItem('isAuth')
      }
    },
  }
</script>
<style scoped>
.navbar{
  position: relative;
  width: 100%;
  height: 66px;
  background: #042331;
}
.navbar-items {
  display: flex;
}
.navbar ul{
  display: flex;
  position: relative;
  left: 200%;
  text-decoration: none;
  bottom: 14px;
  text-decoration: none;
}
.navbar-items  ul li a{
  display: flex;
  line-height: 65px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding-left: 30px;
  text-align: center;
}
.navbar-items  ul a:hover{
  background-color: black;
}
</style>