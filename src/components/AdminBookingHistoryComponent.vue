<template>
  <div class="admin-bookings-container">
    <div class="bookings-not-available">
        <p class="not-found-message">Not Booking History available for Admin!</p>
        <img src="@/assets/bookings-not-found.svg" alt="Not Found">
    </div>
  </div>
</template>

<script></script>

<style scoped>
.admin-bookings-container {
  background-color: whitesmoke;
  padding: 2em;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.bookings-not-available {
    padding: 1em;
    width: 90%;
    border-radius: 1em;
    background-color: white;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.bookings-not-available .not-found-message{
    font-size: large;
    margin: 1em;
}
.bookings-not-available img{
    max-width: 40vw;
    border-radius: 1em;
}
</style>