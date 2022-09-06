<template>
  <div class="confirm-booking-container">
    <div class="failed-message">
      <div class="main-failed-message">
          Sorry! Seat could not be booked :(
          <p class="secondary-failed-message">Seat was already booked for another user!

            <button class="book-another-btn" @click="bookAnotherSeat()">Book other seat?</button>
          </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.book-another-btn{
  margin: 0.1em 0.8em;
  padding: 0.2em 0.7em;
  background-color: #f84464 !important;
  border: none;
  border-radius: 0.2em;
  color: white;
  transition: all 0.3s;
}
.book-another-btn:hover{
  cursor: pointer;
  background-color: #d52344 !important;
}
.confirm-booking-container {
  height: 100vh;
  width: 100vw;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.failed-message {
  font-size: large;
  padding: 1em;
  margin-top: 2em;
  border-radius: 1em;
  background-color: whitesmoke;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main-failed-message{
    height: 50%;
    width: 90%;
    padding: 2em;
    border-radius: 1em;
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.secondary-failed-message{
  color: gray;
}


@media screen  and (max-width: 700px){
  .main-failed-message{
    font-size: x-small !important;
  }
  .secondary-failed-message{
    font-size: xx-small !important;
  }
}
</style>