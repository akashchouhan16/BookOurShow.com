import { mapGetters } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      nullflag: false,
      flag: false,
      user: {
        phoneNumber: "",
        password: "",
        name: "",
        message:''
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
          success: () => {

            // this.$router.push({ path: "/" });
              this.$router.push(this.$route.query.redirect || '/');


          },
          user: this.user
        });
        // location.reload();
        // this.$router.push({path: '/'});
      }

    },
  }
};