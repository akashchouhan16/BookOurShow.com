 <template>
  <div class="register-component">
    <h2>Register</h2>
    <div
      class="alert alert-danger"
      role="alert"
      v-if="errorflag"
      >
      Check! all the fields are filled
    </div>
    <div class="alert alert-success" role="alert" v-if="successflag">
      Successfully added
    </div>
    <div class="user">
      <form>
        <div class="content">
          <div class="left">
            <label>UserName </label>
          </div>
          <div class="right">
            <input type="text" v-model="user.username" />
          </div>
        </div>
        <div class="content">
          <div class="left">
            <label>Phone Number</label>
          </div>
          <div class="right">
            <input type="text" v-model="user.phonenumber" />
          </div>
        </div>
        <div class="content">
          <div class="left">
            <label>Password </label>
          </div>
          <div class="right">
            <input type="text" v-model="user.password" />
          </div>
        </div>
        <button type="button" @click="register()">Register</button>
        <button type="button" @click="reset()">Reset</button>
      </form>
    </div>
  </div>
</template>

<style>
.register-component {
   text-align: center;
  height: 30vh;
  display: block;
  margin: 10% auto;
}
.user {
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
}
</style>
<script>
import { adduserlist } from "../service/addmovielist.js";
export default {
  data() {
    return {
      errorflag: false,
      successflag: false,
      user: {
        username: "",
        password: "",
        phonenumber: "",
      },
    };
  },
  methods: {
    register() {
      if (
        this.user.username == "" ||
        this.user.password == "" ||
        this.user.phonenumber == ""
      ) {
        this.errorflag = true;
      } else {
        console.log(this.user);
        adduserlist({
          success: (data) => {
            this.$router.push({ path: "/userlogin" });
            console.log(data);
          },
          error: () => {},
          payload: this.user,
        });
      }
    },
    reset() {
      this.errorflag = false;
      this.successflag = false;
      for (let field in this.user) {
        this.user[field] = null;
      }
    },
  },
};
</script>