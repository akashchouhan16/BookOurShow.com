import axios from 'axios'

export const getaddmovielist=({success,error})=>
{
axios.get('http://10.30.1.2:8000/admin/get/movie').
then((response)=>{
    console.log(response)
    success && success(response)}).
 catch((e) => {
    error && error(e)
 })
}

export const addmovielist=({success,error,payload})=>
{
axios.post('http://10.30.1.2:8000/admin/post/movie',payload,{headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, X-Requested-With"
  }}).
then((response)=>{
    console.log(response)
    success && success(response)}).
 catch((e) => {
    error && error(e)
 })
}
export const adduserlist=({success,error,payload})=>

{

axios.post('http://10.30.1.159:8089/userverify/insertUser',payload).

then((response)=>{

    console.log(response)

    success && success(response)}).

 catch((e) => {

    error && error(e)

 })



}



export const  checklogin=({success,fail,user})=>

{

axios.post('http://10.30.1.159:8089/userverify/verifyUser',user).

then((response)=>{

    console.log(response)

    success && success(response)}).

 catch((e) => {

    fail && fail(e)
    console.log(e)

 })



}