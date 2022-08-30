<template>
  <div class="login">
    <form class="login-form">
    <h2>Login</h2>
    <br />
    
      <div class="error-message" role="alert" v-if="flag">
        Phone Number or Password is incorrect
      </div>
      <div class="login-input-div">
        <label for="username" class="input-tag">Phone Number</label>
        <br />
        <input
          type="phonenumber"
          class="login-form-input"
          placeholder="Phone Number"
          v-model="user.phonenumber"
        />
      </div>
      <div class="login-input-div">
        <label for="password" class="input-tag">Password</label>
        <br />
        <input
          type="password"
          class="login-form-input"
          placeholder="Password"
          v-model="user.pass"
        />
      </div>
      <button type="button" class="login-button" @click="check()">Login</button>
    </form>
  </div>
</template>

<style scoped>
.login {
  text-align: center;
  height: 30vh;
  display: block;
  margin: 10% auto;
}
.login-form {
  border: none;
  border-radius: 1em;
  color: black;
  width:250px;
  display: block;
  margin: auto;
  background-color: whitesmoke;
}
.login-form-input {
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
  margin: 8px 0;
  width: 90% !important;
}
.login-input-div {
  margin: 10px;
}
.login-button {
  border:none;
  background-color: #f84464 !important;
  border-radius: 1em;
  width: 50px;
  text-align: center;
  height: 30px;
}
@media screen and(max-width:450px) {
  /* .login-form {
    max-width: fit-content !important;
    width: 200px !important;
  }
  .login-form-input {
    width:180px!important;
  } */
}
</style>

<script src="./scripts/LoginComponent.js"></script>
