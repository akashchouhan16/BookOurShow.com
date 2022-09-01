<template>
  <div class="date-slot-card">
    <div class="date">BookOurShow On <span class="highlighted">{{dateSlot.startDate}}</span></div>
    <div class="slots">
      <div class="slot" v-for="(slot,index) in dateSlot.slots" :key="index">
          <button class="slot-btn" :value="slot" @click="setSlotAndRedirect(slot)">{{slot}}</button> 
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DateSlotComponent",
  date() {
    return {
      currentDate: new Date().getDate().toString() + '-' + new Date().getMonth().toString() + '-' + new Date().getFullYear().toString()
    };
  },
  props: {
    dateSlot: {
      type: Object,
      required: true
    }
  },
  methods:{
    bookTicket(slot){
      console.log(this.dataSlot);
      console.warn(slot)
    },
    setSlotAndRedirect(slot){
      localStorage.setItem('slot', slot);
      localStorage.setItem('date', this.dateSlot.startDate);
      console.log('Selected Slot: ' + slot + ' | Date: ' + this.dateSlot.startDate);
      this.$router.push({path: '/booking/seats'});
    }
  }
};
</script>

<style scoped>
.highlighted{
  color: #151928;
  margin-left: .5em;
  padding: 1em;
  border-radius: .5em;
  background-color: whitesmoke;
}
.date-slot-card {
  background-color: rgb(255, 255, 255);
  border-radius: .5em;
  height: 12vh;
  border: 0.02em solid rgba(0, 0, 0, 0.091);
  padding: 0.5em;
  transition: width 0.1s, height 0.2s, box-shadow 0.3s;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.date-slot-card:hover{
  background-color: rgb(255, 255, 255);
  box-shadow: 3px 3px 20px rgb(107, 106, 106);
  /* cursor: pointer; */
}

.date, .slots{
  width: 90%;
  height: auto;
  color: black;
  font-size: large;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.slots {
  border-left: 1px solid gray;
}
.date {
  font-size: large;
  color: rgb(48, 48, 48);
  margin-left: 1em;
}
.slot-btn{
  padding: .6em 2em;
  margin: .1em 1em;
  border: 2px solid rgb(200, 200, 200);
  border-radius: .5em;
  background-color: #f9f9f9;
  color: green;
  font-size: small;
  transition: all 0.3s;
}
.slot-btn:hover{
  cursor: pointer;
  color: darkgreen;
  background-color: whitesmoke;
  box-shadow: 2px 2px 10px lightgray;
  text-decoration: underline;
}
</style>