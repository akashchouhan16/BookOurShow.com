<template>
  <div>
    <div class="admin">
    <div class="adminform">
    <form>
         <div class="alert alert-success" role="alert" v-if="deleteflag">
   Deleted Successfully 
</div>  
        <label>Movie name</label> 
        <input type="text" v-model="name">
        <br><br>
        <button type="button" @click="back()">Back</button>
        <button type="button" @click="delete_user()">Delete</button>
        </form>
    </div>
    </div>
    </div>
</template>

<script>
import {deletemovie} from '../service/theatreService'
export default {
data()
{
    return{
        name:"",
         deleteflag:  false,
    }
},
methods:{
 delete_user()
 {
    console.log(this.name);
     deletemovie({
            success:({data})=>
            {
                this.deleteflag=true;
                console.log(data);
            },
        fail:()=>
        {
        },
          movieid:this.name
        })
    

 },
 back()
 {
    this.$router.push({path:'/addmovie'})
 }
}
}
</script>

<style scoped>
label{
    padding:10px;
}
.admin:hover {
    border-radius:10px;
   box-shadow: 3px 3px 3px 3px rgb(135, 135, 164);
}
input{
    width:fit-content;
}
button {
   margin:10px;
  font-size: 20px;
  width: fit-content!important;
  border-radius: 16px;
  width: 25%;
  margin-bottom:10px;
  background-color:rgb(25, 19, 58)!important;
  color:white;
}
form {
   padding:50px;
  color: black;
  box-sizing: border-box;
  font-size: 19px;
}
.adminform {
    
  background-color: rgb(219, 219, 231);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  width: 100% !important;
}
.admin {
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 5%;
  margin-top: 5% !important;
  text-align: center !important;
}
</style>