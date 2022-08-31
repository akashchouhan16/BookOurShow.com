<template>
  <div class="login">
    
    <h2>Login</h2>
    <br />
    <form class="login-form">
      <div class="error-message" role="alert" v-if="flag">
        Phone Number or Password is incorrect
      </div>
      <div class="login-input-div">
        <label for="username" class="input-label">Phone Number</label>
        <br />
        <input
          type="phonenumber"
          class="login-input"
          placeholder="Phone Number"
          v-model="user.phoneNumber"
        />
      </div>
      <div class="login-input-div">
        <label for="password" class="input-label">Password</label>
        <br />
        <input
          type="password"
          class="login-input"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <button type="button" class="login-button" @click="checkLogin()">Login</button><br/><br/>
     <h6 class="login-register-text"> Don't have a user?<router-link to="./register" class="login-register-text">Click here to Register User</router-link></h6>
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
  width:30%;
  height:300px;
  display: block;
  margin: auto;
  background-color: whitesmoke;
  padding:5px;
  transition: all 0.3s;
}
.login-input {
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
  margin: 8px 0;
  width: 90% ;
  height:40px;
}
/* Not Working */
.login-input:focus{
  outline-color: #f84464,!important;
  /* border: 5px solid #f84464,!important; */

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
  color:white;
}
.login-button:hover{
  background-color: #fd0230 !important;

}
.login-register-text{
  text-decoration:none;
  color:black;
  font-weight:normal;
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
  .login-button{
    border-radius:.5em;
  }
}
</style>

<script src="./scripts/LoginComponent.js"></script>
