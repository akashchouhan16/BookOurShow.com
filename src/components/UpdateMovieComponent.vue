 <template>
  <div class="add-movie">
    <form class="movie-form">
      <h2>Update Movie</h2>
      <br />
      <div class="error-message" v-if="fillfieldsflag">
        Please fill all Required fields
      </div>
      {{movieinfo.message}}
      <div class="movie-tag-div">
        <div for="movieName" class="addmovie-tag"
          >Movie Name <span>*</span>
          <div class="error-message-text" v-if="movieflag">
            Please enter a valid duration
          </div>
          </div
        >
        <br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieupdate.name"
          placeholder="Movie Name"
          required
          :disabled=false
        />
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <div for="genre" class="addmovie-tag">Genre</div>
          <input
            type="text"
            class="add-movie-input"
            placeholder="Genre"
            :disabled=true
            v-model="movieupdate.genre"
          />
        </div>
        <div class="movie-tag-flex">
          <div for="movie-slots" class="addmovie-tag"
            >Time slot
          </div>
          <div class="movie-input-row-flex">
            <!-- <div class="table" v-for="(slot,index) in movieupdate.slots" :key="index" :disabled=true>
              {{slot}}<br/>
                    </div> -->
            <table class="table">
              <tr class="table">
                <td class="table-data">
                  <input
                    type="checkbox" :disabled=true
                    value="9:00 AM - 12:00 PM"
                    id="9:00 AM - 12:00 PM"
                    v-model="movieupdate.slots"
                   
                  />
                  9:00 AM</td>
                <td  class="table-data">
                  <input
                    type="checkbox"
                    value="1:00 PM - 4:00 PM"
v-model="movieupdate.slots" :disabled=true
                    id="1:00 PM - 4:00 PM"
                    
                  />
                  1:00 PM</td>
              </tr>
              <tr class="table">
                <td  class="table-data">
                  <input
                    type="checkbox"
                    value="5:00 PM - 8:00 PM"
                    id="5:00 PM - 8:00 PM" :disabled=true
                    v-model="movieupdate.slots"
                   
                  />
                  5:00 PM </td>
                <td>
                  <input
                    type="checkbox"
                    value="9:00 PM - 12:00 AM"
                    :disabled=true
                    id="9:00 PM - 12:00 AM"
                    v-model="movieupdate.slots"
                    
                  />
                  9:00 PM</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="movie-tag-div">
        <div for="movie-description" class="addmovie-tag"
          >Description<span>*</span> <br />
        <div class="error-message-text" v-if="descriptionerror">
          Please enter a valid description
        </div></div
        >
        <textarea
          class="add-movie-input description"
          placeholder="Movie Description"
          v-model="movieupdate.description"
          rows="4"
          cols="30"
          required
          :disabled=false
        >
        </textarea>
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <div for="duration" class="addmovie-tag"
            >Duration(in minutes)<span>*</span>
          <div class="error-message-text" v-if="durationerror">
            Please enter a valid duration
          </div></div
          >
          <input
            type="number"
            class="add-movie-input"
            placeholder="Duration"
            v-model="movieupdate.duration"
            required
            :disabled=false
          />
        </div>
        <div class="movie-tag-flex">
          <div for="rating" class="addmovie-tag">Rating</div>
          <input
            type="text"
            class="add-movie-input"
            placeholder="Rating"
            v-model="movieupdate.rating"
            :disabled=true
          />
        </div>
      </div>
      <div class="flex-row">
        <div class="movie-tag-flex">
          <div for="start-date" class="addmovie-tag"
            >Start Date</div
          >
          <input
            type="date"
            class="add-movie-input"
            placeholder="Start Date"
            v-model="movieupdate.startDate"
            :disabled=true
          />
        </div>
        <div class="movie-tag-flex">
          <div for="end-date" class="addmovie-tag"
            >End Date</div
          >
          <input
            type="date"
            class="add-movie-input"
            placeholder="End Date"
            v-model="movieupdate.endDate"
            :disabled=true
          />
        </div>
      </div>

      <div class="movie-tag-div">
        <div for="movie-price" class="addmovie-tag">Price per ticket</div
        ><br /><br />
        <div class="error-message-text" v-if="priceerror">
          Please enter a valid Price
        </div>
        <div class="flex-row-tag">
          <div for="movie-price" class="addmovie-tag"
            >Normal<span>*</span></div
          >
          <div for="movie-price" class="addmovie-tag"
            >Executive<span>*</span></div
          >
          <div for="movie-price" class="addmovie-tag"
            >Premium<span>*</span></div
          >
        </div>
        <div class="flex-row">
          <input
            type="number"
            class="add-movie-input"
            placeholder="Normal"
            v-model="movieupdate.normalPrice"
            required
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Executive"
            v-model="movieupdate.executivePrice"
            required
          /><br />
          <input
            type="number"
            class="add-movie-input"
            placeholder="Premium"
            v-model="movieupdate.premiumPrice"
            required
          /><br />
        </div>
      </div>

      <!-- <div class="movie-tag-div">
        <div for="movie-video" class="addmovie-tag"
          >Trailer Video</div
        ><br />
        <input
          type="text"
          placeholder="MovieUrl"
          class="add-movie-input"
          v-model="movieupdate.videoUrl"
        />
      </div> -->

      <div class="movie-tag-div">
        <div for="movie-image" class="addmovie-tag"
          >Movie Image <span>*</span></div
        ><br />
        <input
          type="text"
          class="add-movie-input"
          v-model="movieupdate.imageUrl"
          placeholder="Movie Image"
          required
        />
      </div>
      <br />

      <div class="alert alert-danger" role="alert" v-if="errorflag">
        Check! all the fields are filled
      </div>

      <div class="alert alert-success" role="alert" v-if="success">
        Successfully added
      </div>
      <div class="error-message-text" v-if="fillfieldsflag">
        Please fill all fields
      </div>
      <button type="button" class="movie-button-input" @click="movieupdateinfo()">
        UPDATE
      </button>
      <!--  @click="movieupdate1()" -->
      <!-- <button type="button" class="movie-button-input" @click="reset()">
        RESET
      </button> -->
    </form>
  </div>
</template>





<style scoped>
span {
  color: #ff0000;
}
.error-message {
  background-color: #D52344;
  font-size: small;
  color: white;
  padding: 0.4em;
  max-width: 70%;
  display: block;
  margin: auto;
  border-radius: 1em;
}
.error-message-text{
color:#ff0000;
font-size:x-small;
text-align: left;
}
.add-movie {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:5em;
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
  /* margin: 5px; */
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
  background-color: #D52344 !important;
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
  outline: 2px solid #D52344 !important;

  /* border: 5px solid #D52344,!important; */
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


<script src="./scripts/UpdateMovieComponent.js">
</script>