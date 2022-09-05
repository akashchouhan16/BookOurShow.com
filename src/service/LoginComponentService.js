import axios from 'axios'
export const getUserLogin = ({ success, error, user}) => {
    axios.post('http://10.30.1.144:8081/login', user)
       .then((response) => {
        console.log(response)
        // alert(response.data.statusMessage)
        success && success(response)
        }).
        catch((e) => {
            console.warn(e.response.data.message);
            error && error(e)
        })
}