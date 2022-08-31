 <template>
  <div class="register-component">
    
      <h2>Register</h2>
      <br/>
      <form class="register-form">
      <div class="error-message" role="alert" v-if="errorflag">
        Check! all the fields are filled
      </div>
      <div class="success-message" role="alert" v-if="successflag">
        Successfully added
      </div>
      <div class="register-input-div">
        <label for="username" class="register-label">User Name </label>
        <input type="text" class="register-input" placeholder="User Name" v-model="user.username" />
      </div>
      <div class="register-input-div">
        <label for="phoneNumber" class="register-label">Phone Number</label>
        <input type="text" class="register-input" placeholder="Phone Number" v-model="user.phoneNumber" />
      </div>
      <div class="register-input-div">
        <label for="password" class="register-label">Password </label>
        <input type="password" class="register-input" placeholder="Password" v-model="user.password" />
      </div>
      <button type="button" class="register-button" @click="register()">Register</button>
      <button type="button" class="register-button" @click="reset()">Reset</button>
    <br/><br/>
    <h6 class="register-login-text" >Already have an account?<router-link to="./login" class="register-login-text" >Click here to login</router-link></h6>
    </form>
  </div>
</template>

<style>
.error-message{
  background-color:#f14a4ac8;
}
.error-success{
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
  display: block;
  margin: auto;
  height:370px;
  background-color: whitesmoke;
  padding:5px;
}
.register-form:hover {
  box-shadow: 2px 2px 2px 2px gray;
}
.register-input {
  border: none;
  border-radius: 1em;
  padding: 5px 20px;
  margin: 8px 0;
  width: 90% ;
  height:40px;
}
.register-input-div {
  margin: 10px;
}
.register-button {
  border: none;
  background-color: #f84464 ;
  border-radius: 1em;
  width: 70px;
  text-align: center;
  height: 30px;
  color:white;
  margin:0px 5px;
}
.register-button:hover{
  background-color: #fd0230 !important;

}
.register-login-text{
  text-decoration:none;
  color:black;
  font-weight:normal;
}
@media screen and (max-width:900px) {
  .register-form {
    width:50%;
  }
}
@media screen and (max-width:400px) {
  .register-form {
    width:60%;
  }
}
/* ********************************* */
/* .user {
  margin-left: 25%;
  margin-right: 25%;
  width: 50%;
  background-color: rgb(239, 242, 245);
}
form {
  margin: 10px;
}
input {
  width: fit-content !important;
}
button {
  margin: 5px;
  background-color: rgb(25, 19, 58) !important;
  color: white;
  margin-bottom: 10px;
} */
</style>
<script src="./scripts/RegisterComponent.js">

</script>