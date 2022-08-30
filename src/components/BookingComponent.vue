
 
       
<template>
    <div>
    <div class="des">
     
      <h2>{{ this.movie.name }}</h2>
      
      <div class="video">
       
       <!-- <iframe width="300" height="315" src="https://www.youtube.com/embed/tNnPHz1u3RM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <button class="button1" @click="bookbutton()">Book</button> -->
    <iframe width="500" height="315" :src="movie.videoUrl" title="Movie" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
        </iframe> 
   <button class="button1" @click="booknextbutton()">Next</button>
   
    <h3>Select Your Tickets</h3>
    <div class="selecting">
        <div  class=seatButton :key="i.seat" v-for="i in ticketList ">
            <input style="background-color:white;" type="checkbox" :disabled="i.booked" v-model="i.selected"> {{i.seat}}<br>
             <!-- <input style="background-color:white;" type="checkbox" :disabled="i.booked" v-model="i.selected"> {{i.seat}}<br>
              <input style="background-color:white;" type="checkbox" :disabled="i.booked" v-model="i.selected"> {{i.seat}} -->
               
      </div>
   </div>
   </div > 
    </div> 
     <div class="col-auto">
        <h1>Fill Your Details</h1>
    <label for="inputPassword2" class="visually-hidden">Password</label>
    <input type="name" class="form-control" id="inputPassword2" placeholder="Name" v-model="customername"><br>
    <input type="name" class="form-control" id="inputPassword2" placeholder="PhoneNumber" v-model="PhoneNumber"><br>
    <select class="form-select" aria-label="Default select example">
  <option selected >Class</option>
  <option  value="200">Balcony (Rs.200)</option>
  <option value="100">First Class(Rs.100)</option>
  <option value="50">Second Class (Rs.50)</option>
</select>
  </div>
    </div>
</template>
<script src="../js/BookingComponent.js">




</script>
<style >
.img-fluid{
margin-left: 20%;
}
.des img{
    height:200px;
}
iframe{
    margin-left:50px;
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
margin-left: 20px;
background-color: rgb(249, 39, 74);
border-color:none;
border-radius: 10px;
border: 0px solid;
height: 40%!important;
width:10%;
margin-top: 18%;
}
.button1 :hover{
    background-color: white;
}
.seats{
    background-color: white;
    color:black!important;
}
.seatButton .seats{
    height :10%;
    margin-left:20px;
    color: white;
   
}
.seats button:hover{
    color:white;
    background-color:black;
    
}
.seatButton{
     margin-left: 6px;
     padding-top: 10%;
}
.col-auto{
    border:1px solid white;
   margin-left: 500px;
        border-radius: 10px;
       margin-bottom: 100px;
       width: 25%;
    margin-top: 5%
}
.seatsdisabled{
    background: red
}
h3{
        padding-top: 4%;
        color:white;
}
.selecting{
    display:flex;
        margin-top: 2%;
        margin-left: 29px;
}
</style>