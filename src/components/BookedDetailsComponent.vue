<template>
    <div>
       <div class="card"  :key="index"
      v-for="(product, index) in FinalList">
  <h5 class="card-header">Movie Name:{{product.moviename}}</h5>
  <div class="card-body">
    <h5 class="card-title">User Name:{{product.customername}}</h5>
    <p class="card-text">Price:{{product.netprice}}</p>
    <p class="card-text">Mobile Number:{{product.mobilenumber}}</p>
    <p class="card-text">Number of Tickets Booked:{{product.noofticket}}</p>
    <p class="card-text">Ticket Id:{{product.ticketid}}</p>

    <a href="#" class="btn btn-primary">OK</a>
  </div>
</div>
    </div>
</template>
<script>
import Const from './CustomerDetails'
import { FinalList } from '@/service/theatreService'

export default{
    name:'BookedDetailsComponent',
     data(){
        return{
            CustomerDetails:Const,
            btn:'',
            FinalList:[],
            id:this.$route.query.mobilenumber

        }
    },
   mounted(){
    
        FinalList({
             success:({data})=>{
                
          this.FinalList.push(data);
          console.log( FinalList)
          console.log('inside finalList',data)
        //    this.$router.push({path:'/description',query:{sku:`${data.data.value}`}})
        },
         error: (e) => {

                 console.log(e)

                },
                value:this.id
               
        })
}
}
</script>
<style >
.card{
  width:42%;
  margin-left: 29%;
  margin-top: 10%;
  height: 50%;
}
.btn-primary{
  margin-left: 44%;
}
</style>