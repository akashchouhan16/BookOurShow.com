<template>
  <div class="login">
        <!-- <div class="failureerrormessage" v-else-if="loginfalseflag">Please check again</div> -->
    <form class="login-form">
      <h2>Login
      </h2>
    <div class="successregistermessage">{{errormessage}}</div>

      <br />
      <div class="error-message-alert centre-align" v-if="nullflag">Input fields are empty</div>
      <div class="login-input-div">
        <div for="phoneNumber" class="input-label">Phone Number
          <div class="error-message-alert" v-if="flag">Check Phone Number
      </div>
        </div>
        <br />
        <input
          type="tel"
          class="login-input"
          placeholder="Phone Number"
          v-model="user.phoneNumber"
        />
        </div>
      <div class="login-input-div">
        <div for="password" class="input-label">Password</div>
        <br />
        <input
          type="password"
          class="login-input"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div class="centre-align">
        <button type="button" class="login-button" @click="checkLogin()">
          Login</button
        ><br /><br />
        <h6 class="login-text">
          Don't have a user?<br/><router-link to="./register"
            class="login-register-text"
            >
           Click here to Register User</router-link
          ></h6>
        
      </div>
    </form>
  </div>
</template>

<style scoped>
.centre-align{
  text-align: center;
}
h2{
  text-align: center;
}
.login {
  /* text-align: center; */
  height: 30vh;
  display: block;
  margin: 10% auto;
}
.login-form:hover {
  box-shadow: 2px 2px 15px gray;
}
.successregistermessage{
  text-align: center;
  /* background-color:#d52344; */
  color:red;
  font-size: small;
}
.login-form {
  border: none;
  border-radius: 1em;
  color: black;
  width: 40%;
  height: 350px;
  display: block;
  margin: auto;
  background-color: whitesmoke;
  padding: 5px;
  transition: all 0.3s;
}
.login-input {
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
  width: 100%;
  height: 40px;
}
.input-label {
  font-size: small;
  text-align: left;
  height:fit-content;
  display: flex;
  flex-direction: row;
}
input:focus {
  outline: 2px solid #d52344 !important;
}
.login-input-div {
  margin: 10px;
}
.login-button {
  border: none;
  background-color: #d52344 !important;
  border-radius: 0.7em;
  width: 20%;
  text-align: center;
  height: 30px;
  color: white;
}
.error-message{
  text-align: center;
}
.error-message-alert
{
  color:red;
  font-size: x-small;
  padding:0px 10px;
  width: 50%;
}
.login-button:hover {
  background-color: #f91842 !important;
}
.login-register-text {
  text-decoration: none;
  color: black;
  font-weight: bold;
}.login-register-text:hover{
  color:#d52344 ;
}
.login-text{
  font-weight: normal;
}
/* .login-button:hover{
  box-shadow: 3px 3px 3px 2px #f996a8cc;
} */
@media screen and (max-width: 500px) {
  .login-form {
    width: 80%;
  }
  .login-button {
    border-radius: 0.5em;
  }
}

.form-btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.error-message {
  background-color: #D52344;
  font-size: small;
  color: white;
  padding: 0.4em;
  max-width: 70%;
  display:block;
  margin:auto;
  border-radius: 1em;
}
.error-success {
  background-color: #41f641d8;
}
.register-component {
  text-align: center;
  height: 30vh;
  display: block;
  margin: 10% auto;
}
.register-form {
  border: none;
  border-radius: 1em;
  color: black;
  width: 30%;
  display:block;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  margin: auto;
  height: 400px;
  background-color: whitesmoke;
  padding: 5px;
}
.register-form:hover {
  box-shadow: 2px 2px 15px gray;
}
.register-input {
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
  margin: 8px 0;
  width: 90%;
  height: 40px;
}
.register-input-div {
  margin: 10px;
}
.register-button {
  border: none;
  background-color: #D52344;
  border-radius: 1em;
  width: 70px;
  text-align: center;
  height: 30px;
  color: white;
  margin: 0px 5px;
}
.register-button:hover {
  background-color: #fd0230 !important;
}
.register-login-text {
  text-decoration: none;
  color: black;
  font-weight: normal;
}
input:focus {
  outline: 2px solid #D52344 !important;
  /* border: 5px solid #D52344,!important; */
}
/* @media screen and (max-width: 1000px) {
  
} */
</style>

<script src="./scripts/LoginComponent.js"></script>
