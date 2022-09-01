 <template>
  <div class="add-movie">
    <form class="movie-form">
      <h2>Add Movie</h2>
      <br />
      <div class="error-message" v-if="fillfieldsflag">
        Please fill all Required fields
      </div>
      <div class="movie-tag-div">
        <label for="movieName" class="addmovie-tag"
          >Movie Name <span>*</span></label
        >
        <br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieinfo.name"
          placeholder="Movie Name"
          required
        />
      </div>

      <div class="flex-row">
        <div class="movie-tag-flex">
          <label for="genre" class="addmovie-tag">Genre<span>*</span></label>
          <div class="error-message" v-if="genreerror">
            Please enter a valid genre
          </div>
          <input
            type="text"
            class="add-movie-input"
            placeholder="Genre"
            v-model="movieinfo.genre"
            required
          />
        </div>
        <div class="movie-tag-flex">
          <label for="movie-slots" class="addmovie-tag"
            >Time slot<span>*</span>
          </label>
          <div class="error-message" v-if="sloterror">
            Please enter a valid time slot
          </div>
          <div class="movie-input-row-flex">
            <!-- <select class="add-movie-input" v-model="movieinfo.timeSlot">
              <option value="null">None</option> -->
            <table class="table">
              <tr class="table">
                <td class="table-data">
                  <input
                    type="checkbox"
                    value="9:00 AM - 12:00 PM"
                    id="9:00 AM - 12:00 PM"
                    v-model="movieinfo.slots"
                  />
                <!-- </td>
                <td  class="table-data"> -->
                  9:00 AM</td>
                <td  class="table-data">
                  <input
                    type="checkbox"
                    value="1:00 PM - 4:00 PM"
                    id="1:00 PM - 4:00 PM"
                    v-model="movieinfo.slots"
                  />
                <!-- </td>
                <td  class="table-data"> -->
                  1:00 PM</td>
              </tr>
              <tr class="table">
                <td  class="table-data">
                  <input
                    type="checkbox"
                    value="5:00 PM - 8:00 PM"
                    id="5:00 PM - 8:00 PM"
                    v-model="movieinfo.slots"
                  />
                <!-- </td>
                <td  class="table-data"> -->
                  5:00 PM</td>
                <td>
                  <input
                    type="checkbox"
                    value="9:00 PM - 12:00 AM"
                    id="9:00 PM - 12:00 AM"
                    v-model="movieinfo.slots"
                  />
                <!-- </td>
                <td  class="table-data"> -->
                  9:00 PM</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <!-- <div class="movie-tag-div">
        <label for="genre" class="addmovie-tag">Genre<span>*</span></label><br />
        <input type="text" class="add-movie-input" placeholder="Genre" v-model="movieinfo.genre" required/>
      </div> -->
      <div class="movie-tag-div">
        <label for="movie-description" class="addmovie-tag"
          >Description<span>*</span> </label
        ><br />
        <div class="error-message" v-if="descriptionerror">
          Please enter a valid description
        </div>
        <textarea
          class="add-movie-input description"
          placeholder="Movie Description"
          v-model="movieinfo.description"
          rows="4"
          cols="30"
          required
        >
        </textarea>
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <label for="duration" class="addmovie-tag"
            >Duration(in minutes)<span>*</span></label
          >
          <div class="error-message" v-if="durationerror">
            Please enter a valid duration
          </div>
          <input
            type="number"
            class="add-movie-input"
            placeholder="Duration"
            v-model="movieinfo.duration"
            required
          />
        </div>
        <div class="movie-tag-flex">
          <label for="rating" class="addmovie-tag">Rating<span>*</span></label>
          <input
            type="text"
            class="add-movie-input"
            placeholder="Rating"
            v-model="movieinfo.rating"
            required
          />
        </div>
      </div>
      <div class="error-message" v-if="dateerror">
        Please enter a valid date range
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <label for="start-date" class="addmovie-tag"
            >Start Date<span>*</span></label
          >
          <input
            type="date"
            class="add-movie-input"
            v-model="movieinfo.startDate"
            placeholder="Start Date"
            required
          />
        </div>
        <div class="movie-tag-flex">
          <label for="end-date" class="addmovie-tag"
            >End Date<span>*</span></label
          >
          <input
            type="date"
            class="add-movie-input"
            placeholder="End Date"
            v-model="movieinfo.endDate"
            required
          />
        </div>
      </div>

      <div class="movie-tag-div">
        <label for="movie-price" class="addmovie-tag">Price per ticket</label
        ><br /><br />
        <div class="error-message" v-if="priceerror">
          Please enter a valid Price
        </div>
        <div class="flex-row-tag">
          <label for="movie-price" class="addmovie-tag"
            >Normal<span>*</span></label
          >
          <label for="movie-price" class="addmovie-tag"
            >Executive<span>*</span></label
          >
          <label for="movie-price" class="addmovie-tag"
            >Premium<span>*</span></label
          >
        </div>
        <div class="flex-row">
          <input
            type="number"
            class="add-movie-input"
            placeholder="Normal"
            v-model="movieinfo.normalPrice"
            required
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Executive"
            v-model="movieinfo.executivePrice"
            required
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Premium"
            v-model="movieinfo.premiumPrice"
            required
          /><br />
        </div>
      </div>

      <div class="movie-tag-div">
        <label for="movie-video" class="addmovie-tag"
          >Trailer Video</label
        ><br />
        <input
          type="text"
          placeholder="MovieUrl"
          class="add-movie-input"
          v-model="movieinfo.videoUrl"
        />
      </div>

      <div class="movie-tag-div">
        <label for="movie-image" class="addmovie-tag"
          >Movie Image <span>*</span></label
        ><br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieinfo.imageUrl"
          placeholder="Movie Image"
          required
        />
      </div>

      <!-- <div class="movie-tag-div">
          <label for="  class="addmovie-tag">Total Tickets </label>
          <input type="number" v-model="movieinfo.total_no_tickets" /><br />
        </div> -->

      <!-- <div class="movie-tag-div">
        <label for="movie-slots" class="addmovie-tag">Time slot<span>*</span> </label><br />
        <select class="add-movie-input" v-model="movieinfo.timeSlot">
          <option value="null">None</option>
          <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
          <option value="1:00 PM - 4:00 PM">1:00 PM - 4:00 PM</option>
          <option value="5:00 PM - 8:00 PM">5:00 PM - 8:00 PM</option>
          <option value="9:00 PM - 12:00 AM">9:00 PM - 12:00 AM</option>
        </select>
      </div> -->

      <br />

      <div class="alert alert-danger" role="alert" v-if="errorflag">
        Check! all the fields are filled
      </div>

      <div class="alert alert-success" role="alert" v-if="success">
        Successfully added
      </div>
      <div class="error-message" v-if="fillfieldsflag">
        Please fill all fields
      </div>
      <button type="button" class="movie-button-input" @click="movieinfo1()">
        ADD
      </button>
      <!--  @click="movieinfo1()" -->
      <button type="button" class="movie-button-input" @click="reset()">
        RESET
      </button>
    </form>
  </div>
</template>





<style scoped>
span {
  color: #ff0000;
}
.error-message {
  background-color: #f84464;
  font-size: small;
  color: white;
  padding: 0.4em;
  max-width: 70%;
  display: block;
  margin: auto;
  border-radius: 1em;
}

.add-movie {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.movie-form {
  padding-top: 1em;
  background-color: whitesmoke;
  border-radius: 1em;
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  text-align: center;
  transition: all 0.3s;
  margin-bottom: 250px;
}
.movie-form:hover {
  box-shadow: 2px 2px 15px gray;
  cursor: pointer;
}
.movie-tag-div {
  margin: 5px;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.flex-row-tag {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
}
.movie-tag-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 40%;
}
.movie-input {
  width: 30%;
  border: none;
  border-radius: 1em;
  height: 30px;
  padding: 5px;
}
.add-movie-input {
  width: 80%;
  border: none;
  border-radius: 1em;
  height: 30px;
  margin: 5px;
  padding: 5px;
}
.table{
  width:100%;
}
.description {
  height: 100px;
  padding: 4px;
}
.movie-button-input {
  border: none;
  background-color: #f84464 !important;
  border-radius: 1em;
  width: 20%;
  text-align: center;
  height: 30px;
  color: white;
  margin: 10px;
}
.movie-input-row-flex {
  font-size: small;
  display: flex;
  flex-flow: row wrap;
}
input[type="checkbox"]:focus {
  background-color: #fd0230;
  outline: none !important;
}
input:focus,
textarea:focus,
select:focus {
  outline: 2px solid #f84464 !important;

  /* border: 5px solid #f84464,!important; */
}
.movie-button-input:hover {
  background-color: #fd0230 !important;
}

@media screen and (max-width: 900px) {
  .movie-form {
    width: 80%;
  }
  .movie-button-input {
    margin: 0.5em;
    width: 15%;
    border-radius: 0.5em;
  }
}
@media screen and (max-width: 400px) {
  .movie-form {
    width: 80%;
  }
  .movie-button-input {
    margin: 0.5em;
    width: 15%;
  }
}

</style>


<script src="./scripts/AddMovieComponent.js">
</script>