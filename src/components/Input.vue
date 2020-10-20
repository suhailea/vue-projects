<template>
  <form class="form">
    <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" v-model="model.firstName" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Last name</label>
    <input type="text" class="form-control" v-model="model.lastName" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">email </label>
    <input type="text" class="form-control" v-model="model.email" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">password</label>
    <input type="password" class="form-control" v-model="model.password" id="exampleInputPassword1">
  </div>
  <div class="btn">
    <router-link to="/app">
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm()" >Submit</button>
    </router-link>
    <router-link to="/app">
        <button type="submit" class="btn btn-Danger"  >Cancel</button>
  </router-link>

  </div>
  
</form>

</template>
<script>
export default {
  name:'Input',
  data(){
    return{
      model:{}
    }
  },
  methods:{
    submitForm(){
      // data will be available here
      console.log(this.model)

      // to pass data in to app.vue file
      // 1.the onSave function will be call in APP.vue file
      this.$emit('onSave', this.model)
    }
  }
}
</script>
<style scoped>
.form{
  position: relative;
    left: 13%;
    width: 30%;
    background: white;
}

.form-group {
    width: 40%;
    margin-top: 40px;
    margin-left: 30%;
}
.btn{
   margin-left: 30%; 
   display: flex;
  
}
.check-box{
  display: flex;
}
</style>