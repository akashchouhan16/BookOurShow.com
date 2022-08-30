<template>

  <div class="login">

    <h4>User Login</h4>

    <div class="alert alert-danger" role="alert" v-if="flag">

  Username and password is incorrect

</div>

<form>

         <!-- <div class="mb-3">

  <label for="exampleFormControlInput1" class="form-label" >Username</label>

  <input type="text" class="form-control"   v-model="user.username">

</div> -->

<div class="mb-3">

<label for="exampleFormControlInput1" class="form-label" >Password</label>

  <input type="password" class="form-control"  v-model="user.password">

</div>
<div class="mb-3">

  <label for="exampleFormControlInput1" class="form-label" >PhoneNumber</label>

  <input type="tel" class="form-control"   v-model="user.phonenumber">
</div>

<button type="button" @click="login()">login</button>

<button type="button" @click="register()">Register</button>

 </form>

 

</div>

</template>



<script>

import {checklogin} from '../service/addmovielist'

export default {

data(){

    return{
         id:this.$route.query.movieid,
         name:this.$route.query.moviename,
      user:{  phonenumber:"",

        password:"",
        username:"",
      },
        flag:false

    }

},

methods:{

    login()

    {

         checklogin({

            success:({data})=>

            {

               // alert("logged in");
                console.log(data);
                if(data.datafound==true){
                // this.$router.push({path : '/'})
                 this.$router.push({path:'/booking',query:{movieid:this.id,moviename:this.name}})
                }
                else{
                        alert(' user not found')
                }

                

            },

        fail:()=>

        {

            alert("Username and password mismatch");

        },

        //    username:this.username,

        //    password:this.password,
        //    phonenumber:this.phonenumber
        user: this.user


        })

    },

    register()

    {

        this.$router.push({path : '/register'})

    }

}

}

</script>



<style scoped>

form{

     margin-left:10%;

     

}

.login{

    border-radius:10px;

    color:black;

    background-color:rgb(219, 219, 231)!important;

    margin-top:10%;

    width:50%;

    margin-left:25%;

    margin-right:25%;

}

 button{

    color:white;

    background-color:rgb(25, 19, 58)!important;

     margin-left:40%;

     margin-right:40%;

     margin-bottom:10px;

     border-radius:10px;

 }

 h4{

    text-align:center;

 }

 input{

    width:80%!important;

 }

</style>