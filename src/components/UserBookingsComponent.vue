<template>
  <div class="user-bookings-container">
    <div class="user-booking-banner">
      <p class="user-booking-greeting">
        {{ GreetingMessage() }} <span class="highlighted">{{ username }}</span>!
      </p>
      <p class="user-booking-meta">Scroll to see all your previous bookings</p>
    </div>
    <div class="user-booking-list">
      <div class="booking-list"></div>
    </div>
  </div>
</template>

<script src="./scripts/UserBookings.js"></script>

<style scoped>
.highlighted {
  color: #f84464 !important;
}
.user-bookings-container {
  height: 100vh;
  width: 100vw;
  background-color: #333545 !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
}

.user-booking-banner {
  background-color: #1f253a;
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
  margin: .5em auto;
}
.user-booking-meta {
  color: gray;
  font-size: small;
}
.user-booking-meta:hover{
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
.booking-list{
  border-radius: 1em;
  background-color: white;
  margin: 1em;
  height: 80vh;
  width: 95%;
}

@media screen and (max-width: 450px){
  .user-booking-greeting{
    font-size: medium;
  }
  .user-booking-meta{
    font-size: x-small;
  }
}
</style>