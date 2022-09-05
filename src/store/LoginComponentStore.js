import { getUserLogin } from "../service/LoginComponentService";
export default {
  state: {
    user: [],
    isLoggedIn: false,
    isAdmin: false
  },
  getters: {
    getuser(state) {
      return state.user;
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    },
    getAdminStatus(state){
      return state.isAdmin;
    }
  },
  mutations: {
    setuser(state, value) {
      state.user = value;
      console.log(value);
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
    setAdminStatus(state, status){
      state.isAdmin = status
    }
  },
  actions: {
    LOGIN_USER({ commit }, { success, user }) {
      console.warn(user);
      getUserLogin({
        success: ({ data }) => {
          console.log(data);
          
          if (data.statusCode === 200) {
            commit("setIsLoggedIn", true);
            this.commit("setuser", data);
            localStorage.setItem("role", data.role);
            localStorage.setItem("userId", data.userId);
            localStorage.setItem("name", data.name);
            localStorage.setItem('loggedIn', true);
            if(data.role === 'admin'){
              commit('setAdminStatus', true);
            }
            success();
          }
        },
        error: (err) => {
          console.log(err);
          commit("setIsLoggedIn", false);
          localStorage.removeItem("role");
          localStorage.removeItem("userId");
          localStorage.removeItem("name");
          localStorage.removeItem('loggedIn');
          commit('setAdminStatus', false);
        },
        user,
      });
    },
  },
};
