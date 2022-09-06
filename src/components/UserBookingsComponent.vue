<template>
  <div class="user-bookings-container">
    <div class="user-booking-banner">
      <p class="user-booking-greeting">
        {{ GreetingMessage() }} <span class="highlighted">{{ username }}</span
        >!
      </p>
      <p class="user-booking-meta">Scroll to see all your previous bookings</p>
    </div>
    <div class="user-booking-list">
      <div class="booking-list">
        <!-- <div v-for="(tickets, index) in  userdetails" :key="index" :tickets="tickets" class="booked-tickets">
          <div class="booked-tickets-left">Movie name:{{tickets.movieName}}<br />
          Date:{{tickets.date}}
          <br/>Slot:{{tickets.slot}}
          </div>
          <div class="booked-tickets-middle">
            SEAT NUMBERS:{{tickets.seats}}</div>
            <div class="booked-tickets-right">Paid<br><span>{{tickets.totalAmount}}</span></div>
          </div> -->
        <div
          v-for="(tickets, index) in userdetails"
          :key="index"
          :tickets="tickets"
          class="booked-tickets"
        >
          <div class="booked-tickets-left">
            <h1 id="movieName">{{ tickets.movieName }}</h1>
            <br />
            <div class="left-container">
              Date:&nbsp;{{ tickets.date }}<br />
              <br />Slot:&nbsp;{{ tickets.slot }}
            </div>
          </div>
          <div class="booked-tickets-middle left-container">
            SEAT NUMBERS: {{ tickets.seats }}
          </div>
          <div class="booked-tickets-right">
            Paid<br /><span>{{ tickets.totalAmount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./scripts/UserBookings.js"></script>

<style scoped>
.left-container {
  font-size: 13px;
  font-weight: 400;
}
#movieName {
  color: #f84464;
  size: 20px;
  font-weight: 700;
  padding: 0;
}
.booked-tickets-middle {
  margin: 5px 0px;
  width: fit-content;
}
span {
  color: green;
  font-size: 30px;
  font-weight: 700;
}
.booked-tickets {
  padding: 20px;
  background: #ffffff;
  /* box-shadow: 20px 20px 60px #e8e6e6, -20px -20px 60px #ffffff; */
  box-shadow: 2px 2px 10px lightgray;
  height: 20vh;
  width: 70%;
  border-radius: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-size: medium;
  margin: 10px;
}
.booked-tickets-right {
  width: fit-content;
  padding: 7px;
  font-size: 1em;
}
.booked-tickets-rightContainer {
  width: 50%;
  padding: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 10px;
  /* font-size: 0.75em; */
}
.highlighted {
  color: #f84464 !important;
}
.user-bookings-container {
  height: 100vh;
  width: 100vw;
  background-color: #222434 !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.user-booking-banner {
  background-color: #151928;
  color: white;
  border-radius: 0.5em;
  height: 50vh;
  margin: 1em;
  margin-top: 2em !important;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
}
.user-booking-greeting {
  font-size: xx-large;
  margin: 0.5em auto;
}
.user-booking-meta {
  color: gray;
  font-size: small;
}
.user-booking-meta:hover {
  cursor: pointer;
  color: #f9f9f9;
}
.user-booking-list {
  border-radius: 0.5em;
  background-color: whitesmoke;
  margin: 0.5em;
  padding: 1em;
  height: 110vh;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.booking-list {
  border-radius: 1em;
  background-color: #e1dede;
  margin: 1em;
  /* margin-top: 7em; */
  margin-top: 4em;
  height: 80vh;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 450px) {
  .user-booking-greeting {
    font-size: medium;
  }
  .user-booking-meta {
    font-size: x-small;
  }
}
@media screen and (max-width: 1500px) {
  .booked-tickets {
    height: fit-content;
    /* font-size:10px; */
    width: 90%;
  }
}
@media screen and (max-width: 700px) {
  .booked-tickets {
    flex-direction: column;
    transition-duration: 1s;
    justify-content: center;
    text-align: center;
    width: 90%;
  }
}
</style>