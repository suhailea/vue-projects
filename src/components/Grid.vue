<template>
 <div class="grid"><table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Countries</th>
      <th scope="col">Native Name</th>
      <th scope="col">Region</th>
      <th scope="col">Capital</th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="item in list" v-bind:key="item.id">    
      <td>{{item.name}}</td>
      <td>{{item.nativeName}}</td>
      <td>{{item.region}}</td>
      <td>{{item.capital}}</td>
    </tr> 
  </tbody>
</table> 

</div>

</template>

<script>
import vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
vue.use(VueAxios,axios)
export default {
  name:'Grid',
  data(){
    return{
      list : undefined
    }
  },
  mounted(){
    vue.axios.get('https://restcountries.eu/rest/v2/all')
    .then((resp) =>{
      this.list = resp.data
      console.warn(resp.data);
    })
  }
 
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