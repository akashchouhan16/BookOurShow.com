import { mapGetters } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      nullflag: false,
      user: {
        phoneNumber: "",
        password: "",
        name: "",
      },
      flag: false,
    };
  },
  computed: {
    ...mapGetters({
      users: "getuser",
    }),
  },
  methods: {
    checkLogin() {
      console.log(localStorage);
      localStorage.clear();
      console.log(localStorage);

      console.log(this.user);
      if (this.user.password == "" || this.user.password == "") {
        this.nullflag = true;
      } else if (this.user.phoneNumber < 0) {
        this.flag = true;
      } else {
        this.nullflag = false;
        this.$store.dispatch("LOGIN_USER", {
          success: () => {
            this.$router.push({ path: "/" });
          },
          user: this.user,
        });
        // location.reload();
        // this.$router.push({path: '/'});
      }
    },
  },
};
