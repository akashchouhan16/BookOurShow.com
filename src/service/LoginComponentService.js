import axios from 'axios'
export const getUserLogin = ({ success, error }) => {
    axios.get('https://62f23c6518493ca21f2f538c.mockapi.io/users').then((response) => {
        console.log(response)
        success && success(response)
    }).
        catch((e) => {
            console.log(e);
            error && error(e)
        })
}