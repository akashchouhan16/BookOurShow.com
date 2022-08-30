<template>
  <div class="login">
    <h4>Login</h4>
    <div class="alert alert-danger" role="alert" v-if="flag">
      Username and password is incorrect
    </div>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Username</label
        >
        <input type="text" class="form-control" v-model="user" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Password</label
        >
        <input type="password" class="form-control" v-model="pass" />
      </div>
      <button type="button" @click="check()">login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      pass: "",
      flag: false,
    };
  },
  methods: {
    check() {
      this.flag = false;
      console.log(this.user + " " + this.pass);
      if (this.user == "admin" && this.pass == "admin") {
        this.$router.push({ path: "/addmovie" });
      } else {
        this.flag = true;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin-left: 10%;
}
.login {
  border-radius: 10px;
  color: black;
  background-color: rgb(219, 219, 231) !important;
  margin-top: 10%;
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
button {
  color: white;
  background-color: rgb(25, 19, 58) !important;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10px;
  border-radius: 10px;
}
h4 {
  text-align: center;
}
input {
  width: 80% !important;
}
</style>
