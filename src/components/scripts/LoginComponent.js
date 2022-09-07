import { mapGetters } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      nullflag: false,
      flag: false,
      errormessage:'',
      user: {
        phoneNumber: "",
        password: "",
        name: ""
      },

    };
  },
  computed: {
    ...mapGetters({
      users: "getuser",
    }),
  },
  watch: {
    user: {
      phoneNumber(value) {
        if ((parseInt(value) < 0) || value != 10) {
          this.flag = true;
        } else {
          // this.nullflag = false;
          this.flag = false;
        }
      }
    },
  },
  methods: {
    checkLogin() {
      if (this.user.phoneNumber == "" || this.user.password == "") {
        this.nullflag = true;
      }
      if ((parseInt(this.user.phoneNumber) < 0) || this.user.phoneNumber.length != 10) {
        this.flag = true;
      } else {
        this.nullflag = false;
        this.flag = false;
        this.$store.dispatch("LOGIN_USER", {
          success: (data) => {
console.log("inside callback",data)

            // this.$router.push({ path: "/" });
              this.$router.push(this.$route.query.redirect || '/');
// console.log("inside callback",data)

          },
          error:(err)=>{
console.log(err)
this.errormessage=err
console.log(this.errormessage)
          },
          user: this.user
        });
        // location.reload();
        // this.$router.push({path: '/'});
      }

    },
  }
};