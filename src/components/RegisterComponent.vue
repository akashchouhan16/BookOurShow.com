 <template>
  <div class="register">
    <br /><br />
    <form class="register-form">
      <h2 class="centre-align">Register</h2>
      <div class="error-message" role="alert" v-if="errorflag">
        Please check all the fields!
      </div>
      <div class="success-message" role="alert" v-if="successflag">
        {{errormessage}}
      </div>

      <div class="register-input-div">
        <div for="username" class="register-label">
          User Name
          <div class="error-message" v-if="nameerrorflag">
            Please enter a valid name
          </div>
        </div>
        <input
          type="text"
          class="register-input"
          placeholder="User Name"
          v-model="user.name"
        />
      </div>
      
      <div class="register-input-div">
        <div for="phoneNumber" class="register-label">Phone Number<div class="error-message" v-if="phoneerrorflag">
        Please enter a valid phone number
      </div></div>
        <input
          type="number"
          class="register-input"
          placeholder="Phone Number"
          v-model="user.phoneNumber"
        />
      </div>
      
      <div class="register-input-div">
        <div for="password" class="register-label">Password<div class="error-message" v-if="passworderrorflag">
        Password must contain at least a lowercase, uppercase, number and one
        special character
      </div></div>
        <input
          type="password"
          class="register-input"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div class="register-input-div">
        <div for="confirm-password" class="register-label">Password<div class="error-message" v-if="confirmflag">
        Passwords do not match
      </div></div>
        <input
          type="password"
          class="register-input"
          placeholder="Comfirm Password"
          v-model="user.confirmpassword"
        />
      </div>
      <div class="form-btn">
        <button type="button" class="register-button" @click="registerUser()">
          Register
        </button>
        <button type="button" class="register-button" @click="reset()">
          Reset
        </button>
      </div>
      <h6 class="centre-align">
        Already have an account?<router-link
          to="./login"
          class="register-login-text"
          ><br />Click here to login</router-link
        >
      </h6>
    </form>
  </div>
</template>

<style scoped>
.centre-align {
  text-align: center;
}
.register {
  /* text-align: center; */
  height: 30vh;
  display: block;
  margin: 10% auto;
}
.register-form:hover {
  box-shadow: 2px 2px 15px gray;
}
.register-form {
  border: none;
  border-radius: 1em;
  color: black;
  width: 40%;
  height: 450px;
  display: block;
  margin: auto;
  background-color: whitesmoke;
  padding: 5px;
  transition: all 0.3s;
}
.form-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.error-message-alert {
  background-color: #d52344;
  font-size: small;
  color: white;
  padding: 0.4em;
  max-width: 90%;
  display: block;
  margin: auto;
  border-radius: 1em;
  text-align: center;
  font-size: small;
}
.error-message{
  color:red;
  font-size: x-small;
  margin-left: 10px;
  width:fit-content;
}
.register-label {
  font-size: small;
  text-align: left;
  height: fit-content;
  display: flex;
  flex-direction: row;
  
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
/* .register-form {
  border: none;
  border-radius: 1em;
  color: black;
  width: 30%;
  display: block;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
 /* margin: auto;
  height: 400px;
  background-color: whitesmoke;
  padding: 5px;
} */
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
h6 {
  font-weight: normal;
}
.register-button {
  border: none;
  background-color: #d52344;
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
  font-weight: bold;
}
.register-login-text:hover{
  color:#d52344 ;
}
input:focus {
  outline: 2px solid #d52344 !important;
  /* border: 5px solid #D52344,!important; */
}
@media screen and (max-width: 900px) {
  .register-form {
    width: 70%;
    height:450px;
  }
  .register-input{
    width:100%;
  }
}
@media screen and (max-width: 460px) {
  .register-form {
    width: 80%;
     height:450px;
  }
}
@media screen and (max-width: 400px) {
  .register-form {
    width: 90%;
    height:450px;
  }
}
</style>
<script src="./scripts/RegisterComponent.js">
</script>