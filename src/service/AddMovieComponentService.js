import axios from 'axios'

export const addmovieinlist=({success,error,movie})=>
{
axios.post('http://10.30.1.35:8083/',movie).
then((response)=>{
    console.log(response)
    success && success(response)}).
 catch((err) => {
    error && error(err)
 })
}