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
          v-model="user.phoneNumber"
        />
      </div>
      <div class="login-input-div">
        <label for="password" class="input-tag">Password</label>
        <br />
        <input
          type="password"
          class="login-form-input"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <button type="button" class="login-button" @click="check()">Login</button>
      <!-- Don't have a user?<RegisterComponent>Click here to Register User</RegisterComponent> -->
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
.login-form:hover {
  box-shadow: 2px 2px 2px 2px gray;
}
.login-form {
  border: none;
  border-radius: 1em;
  color: black;
  /* width:250px; */
  width:30%;
  height:300px;
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
  height:40px;
}
.login-input-div {
  margin: 10px;
}
.login-button {
  border:none;
  background-color: #f84464 !important;
  border-radius: 1em;
  width: 20%;
  text-align: center;
  height: 30px;
}
/* .login-button:hover{
  box-shadow: 3px 3px 3px 2px #f996a8cc;
} */
@media screen and (max-width:900px) {
  .login-form {
    width:50%;
  }
}
@media screen and (max-width:400px) {
  .login-form {
    width:60%;
  }
}
</style>

<script src="./scripts/LoginComponent.js"></script>
