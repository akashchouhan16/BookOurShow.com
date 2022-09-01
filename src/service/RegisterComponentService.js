import axios from 'axios'
export const adduserlist=({success,error,payload})=>

{

axios.post('http://10.30.1.144:8081/register',payload).
then((response)=>{
    console.log(response)
    success && success(response)}).
 catch((err) => {
    error && error(err)
 })
}