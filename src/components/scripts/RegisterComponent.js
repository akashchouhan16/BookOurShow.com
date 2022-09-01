// export default {
//   name:"RegisterComponent",
//   data() {
//     return {
//       errorflag: false,
//       successflag: false,
//       user: {
//         username: "",
//         password: "",
//         phoneNumber: "",
//       },
//     };
//   },
//   methods: {
//     register() {
//       if (
//         this.user.username == "" ||
//         this.user.password == "" ||
//         this.user.phoneNumber == ""
//       ) {
//         this.errorflag = true;
//       } else {
//         console.log(this.user);
//         adduserlist({
//           success: (data) => {
//             this.$router.push({ path: "/userlogin" });
//             console.log(data);
//           },
//           error: () => {},
//           payload: this.user,
//         });
//       }
//     },
//     reset() {
//       this.errorflag = false;
//       this.successflag = false;
//       for (let field in this.user) {
//         this.user[field] = null;
//       }
//     },
//   },
// };