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
    <button type="button" @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "admin") {
        this.$store.commit("setAuthentication", true);
        this.$router.replace({ name: "grid" });
      } else {
        //console.log("The username and / or password is incorrect");
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
