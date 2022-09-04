import { adduserlist } from "@/service/RegisterComponentService";
export default {
  name: "RegisterComponent",
  data() {
    return {
      errorflag: false,
      successflag: false,
      passworderrorflag: false,
      nameerrorflag: false,
      phoneerrorflag: false,
      // passwordsuccessflag:false,
      user: {
        name: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    registerUser() {
      console.log(!this.CheckPassword(this.user.password))
      console.log(this.phonenumber(this.user.phoneNumber))
      console.log(this.CheckFirstLetterSpecial(this.user.name))
      console.log((this.phonenumber(this.user.phoneNumber)) && (this.user.phoneNumber.length == 10))
      console.log(this.CheckFirstLetterSpecial(this.user.name) && (this.user.name.length > 5))
      if (this.user.name == "" || this.user.password == "" || this.user.phoneNumber == "") {
        this.errorflag = true;
        console.log(this.errorflag)
      }
      else {
        this.errorflag = false;

        if ((this.CheckPassword(this.user.password)) && this.user.password.length >= 8) {
          this.passworderrorflag = false;
          this.errorflag = false;
        }
        else {
          console.log(this.user.password.length);
          this.errorflag = true;

          this.passworderrorflag = true;
        }
        if ((!this.phonenumber(this.user.phoneNumber)) && (this.user.phoneNumber.length == 10)) {
          this.phoneerrorflag = true;
          this.errorflag = true;

        }
        else {
          this.errorflag = false;

          this.phoneerrorflag = false;

        }
        if ((this.CheckFirstLetterSpecial(this.user.name)) && (this.user.name.length > 3)) {
          this.nameerrorflag = false;
          this.errorflag = false;

        }
        else {
          this.errorflag = true;

          this.nameerrorflag = true;
        }
      }
      console.log(this.errorflag);
      if (this.errorflag == false) {
        console.log(this.user);
        adduserlist({
          success: (data) => {
            if (data.data == "Succesfully Register") {
              alert(data.data);
              this.$router.push({ path: "/login" });
            }
            else { this.errorflag = true }
          },
          error: (err) => {
            console.log("NOT VAILD")
            console.log(err)
          },
          payload: this.user,
        });
      }
      else {
        this.errorflag = true;
      }
    },
    reset() {
      this.errorflag = false;
      this.successflag = false;
      this.passworderrorflag = false;
      this.nameerrorflag = false,
        this.phoneerrorflag = false
      for (let field in this.user) {
        this.user[field] = null;
      }
    },
    CheckPassword(inputtxt) {
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      console.log(decimal.test(inputtxt) + "cinsill");
      return decimal.test(inputtxt);
    },
    phonenumber(inputtxt) {
      var phoneno = /^\d{10}$/;
      return phoneno.test(inputtxt);
    },
    CheckFirstLetterSpecial(inputtxt) {
      var regex = /^[A-Za-z0-9 ]+$/
      // console.log(regex.test(inputtxt))
      return regex.test(inputtxt);
    }
  }
}