 <template>
  <div class="register-component">
    <h2>Register</h2>
    <br /><br />
    <form class="register-form">
      <div class="error-message" role="alert" v-if="errorflag">
        Please check all the fields! 
      </div>
      <div class="success-message" role="alert" v-if="successflag">
        Successfully added
      </div>

      <div class="register-input-div">
        <label for="username" class="register-label">User Name </label>
        <div class="error-message" role="alert" v-if="nameerrorflag">
          Please enter a valid name
        </div>
        <input
          type="text"
          class="register-input"
          placeholder="User Name"
          v-model="user.name"
        />
      </div>
      <div class="error-message" role="alert" v-if="phoneerrorflag">
        Please enter a valid phone number
      </div>
      <div class="register-input-div">
        <label for="phoneNumber" class="register-label">Phone Number</label>
        <input
          type="number"
          class="register-input"
          placeholder="Phone Number"
          v-model="user.phoneNumber"
        />
      </div>
      <div class="error-message" role="alert" v-if="passworderrorflag">
        Password must contain at least a lowercase, uppercase, number and one
        special character
      </div>
      <div class="register-input-div">
        <label for="password" class="register-label">Password </label>
        <input
          type="password"
          class="register-input"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <!-- <div class="form-btn"> -->
        <button type="button" class="register-button" @click="registerUser()">
          Register
        </button>
        <button type="button" class="register-button" @click="reset()">
          Reset
        </button>
      <!-- </div> -->

      <br /><br />
      <h6 class="register-login-text">
        Already have an account?<router-link
          to="./login"
          class="register-login-text"
          >Click here to login</router-link
        >
      </h6>
    </form>
  </div>
</template>

<style>

/* .form-btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
} */
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
@media screen and (max-width: 900px) {
  .register-form {
    width: 50%;
  }
}
@media screen and (max-width: 400px) {
  .register-form {
    width: 60%;
  }
}
</style>
<script src="./scripts/RegisterComponent.js">
</script>