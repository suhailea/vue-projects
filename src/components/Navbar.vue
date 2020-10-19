<template>
  <div class="navbar">
    <div class="navbar-items">  
     <ul>
       <li><a href="">Home</a></li>
       <li><a href="">About</a></li>
       <li><a href="">Services</a></li>
       <li><a href="">Contacts</a></li>
     </ul>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>
<style scoped>
.navbar{
  position: relative;
  width: 110%;
  height: 66px;
  background: #042331;
}
.navbar-items {
  display: flex;
}
.navbar ul{
  display: flex;
    position: relative;
    left: 300%;
    bottom: 14px;
    text-decoration: none;
}
.navbar-items  ul  a{
  display: flex;
  line-height: 65px;
  font-size: 20px;
  color: white;
  text-decoration: none;
  padding-left: 30px;
  text-align: center;
}
.navbar-items  ul a:hover{
  color: blue;
}
</style>