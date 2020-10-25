<template>
  <div class="login">
    <h1>Login Page</h1>
    <input
      type="text"
      name="Username"
      v-model="input.username"
      placeholder="username"
    />
    <input
      type="password"
      name="Username"
      v-model="input.password"
      placeholder="password"
    />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        name: "admin",
        password: "admin",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "admin") {
        this.$store.commit("setAuthentication", true)
        this.$router.replace({name: 'grid'})
        // localStorage.setItem("isAuth", true)
        //  localStorage.removeItem('isAuth')
        
      } else {
        console.log("The Username or password is Invalid");
      }
    },
  },
};
</script>

<style>
.login {
  position: relative;
  left: 30%;
}
</style>