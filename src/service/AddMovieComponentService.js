import axios from 'axios'

export const addmovieinlist=({success,error,movie})=>
{
axios.post('http://10.30.1.35:8083/addMovie',movie).
then((response)=>{
    console.log(response)
    success && success(response)
   if(response.status==200)
   {
      console.info("Movie is inserted");
   }
   }).
 catch((err) => {
    error && error(err)
 })
}