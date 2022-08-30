import { getUserLogin } from "../service/LoginComponentService"
export default {
    state: {
        user: []
    },
    getters: {
        getuser(state) {
            return state.user;
        }
    },
    mutations: {
        setuser(state, value) {
            state.user = value;
            console.log(value);
        }
    },
    actions: {
        LOGIN_USER({state}, user){
            console.log(state.user);
            console.warn(user);
            getUserLogin({
                success:({data})=>{
                    console.log(data);
                    this.commit('setuser',data);
                    console.log(state.user);

                    // console.log("this is the data");
                    // console.log(data.value);
                },
                error: (err) => {
                    console.log(err)
                },
                user
            })
        }
    }
}