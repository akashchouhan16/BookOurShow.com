<template>
    <div>

    <!-- <div class="des"
      :key="index"
      v-for="(product, index) in moviedesc">
     
      <h2>{{ product.name }}</h2>
      <div class="video">
     
   <button class="button1" @click="bookbutton('value')">Book</button>
   <button type="button" class="btn btn-outline-dark" >09:00-12:00</button>
   <button type="button" class="btn btn-outline-dark" >12:00-3:00</button>
   <button type="button" class="btn btn-outline-dark" >03:00-05:00</button>
   <button type="button" class="btn btn-outline-dark" >08:00-11:00</button>
   </div >
     <div class="contents">
      
       <h2 style="color:black;">About The Movie</h2>
       <p>
        {{product.Description}}</p>   
       
      </div> 
        
      
     
    </div> -->
     <div class="des">
     
      <h2>{{ movie.name}}</h2>
      <div class="video">
         <iframe width="500" height="315" :src="movie.videoUrl" title="Movie" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe> 
    
   <button class="button1" @click="bookbutton()">Book</button>
     <button type="button" class="btn btn-outline-dark"  @click="bookbutton()">09:00-12:00</button>
   <button type="button" class="btn btn-outline-dark"  @click="bookbutton()">12:00-3:00</button>
   <button type="button" class="btn btn-outline-dark" @click="bookbutton()" >03:00-05:00</button>
   <button type="button" class="btn btn-outline-dark"  @click="bookbutton()">08:00-11:00</button>
   </div >
     <div class="contents">
      
       <h2 style="color:black;">About The Movie</h2>
       <p>
        {{this.movie.description}}</p>   
       
      </div> 
        
      
     
    </div>
    
    </div>
</template>
<script src="../js/DescriptionComponent.js">




</script>
<style >
.img-fluid{
margin-left: 20%;
}
.des img{
    height:200px;
}
.des{
    background-color: black;
}
.des h2{
    color:white;
    text-align: center;
    padding-top:100px;
}
.des p{
    color:black;
    margin-top: 1%;
    margin-left: 3%;
}
.video{
    display: flex;
}
.contents{
    /* display: flex; */
    background-color: white;
    margin-left: 0px;
   
}
.button1{
margin-left: 90px;
background-color: rgb(249, 39, 74)!important;
border-color:none;
border-radius: 10px;
border: 0px solid;
height: 40%;
width:10%;
margin-top: 14%;
}
.btn-outline-dark{
    margin-top: 30px;
    height: 90%!important;
    width:10%;
   color:black;
   margin-left: 18px;
}
/* .button1 button :hover{
    background-color: white;
} */


</style>
