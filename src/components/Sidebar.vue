<template>
  <div class="sidebar">
  <div class="sidebar-items">
    <header>My App</header>
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
  name:"Sidebar"
}
</script>
<style scoped>
.sidebar{
  position: fixed;
  left: 0;
  width: 250px;
  height: 100%;
  background: #042331;
}
.sidebar-items header{
  font-size: 20px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
}
.sidebar-items  ul a{
  display: block;
  height: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px soild rgba(255, 255, 255, .1);
  text-decoration: none;
}
.sidebar-items  ul a:hover{
  background-color: black;
}
</style>