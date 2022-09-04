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
                    localStorage.setItem('role', data.role);
                    localStorage.setItem('userId', data.userId);
                    
                },
                error: (err) => {
                    console.log(err)
                },
                user
            })
        }
    }
}