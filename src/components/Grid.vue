<template>
<div class="grid">
  <table class="table table-striped">
  <thead>
    <tr>    
      <th scope="col">#</th>     
      <th scope="col">First</th >      
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
       <router-link to="/input">
      <td>Mark</td>
      </router-link>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
       <router-link to="/input">
      <td>Jacob</td>
      </router-link>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
       <router-link to="/input">
      <td>Larry</td>
      </router-link>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <th scope="row">4</th>
       <router-link to="/input">
      <td>Mark</td>
      </router-link>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr><tr>
      <th scope="row">5</th>
       <router-link to="/input">
      <td>Mark</td>
      </router-link>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>

export default {
  name:'Grid',
  
}
</script>
<style scoped>
.grid{
      width: 40%;
    position: absolute;
    left: 20%;
    top: 25%;
}
.grid td{
  cursor: pointer;
}
</style>