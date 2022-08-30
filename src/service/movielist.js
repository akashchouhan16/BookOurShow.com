import axios from 'axios'

export const getmovielist=({success,error})=>
{
axios.get('http://10.30.1.144:8000/admin/get/movie').
then((response)=>{
    console.log(response)
    success && success(response)}).
 catch((e) => {
    error && error(e)
 })
}
export const getmoviedesc=({success,error,value})=>
{
axios.get(`http://10.30.1.2:8000/admin/get/movie/${value}`)
// axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${value}&start=0&itemPerPage=20`)
.then((response)=>{
   //  console.log("cxcsds",response.data)
    success && success(response.data)}).
 catch((e) => {
    error && error(e)
 })
}
export const getbooking=({success,error,value})=>
{
axios.get(`http://10.30.1.2:8000/admin/get/movie/${value}`)
// axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${value}&start=0&itemPerPage=20`)
.then((response)=>{
   //  console.log("cxcsds",response.data)
    success && success(response.data)}).
 catch((e) => {
    error && error(e)
 })
}
