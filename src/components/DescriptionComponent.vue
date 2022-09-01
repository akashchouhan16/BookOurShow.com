<template>
  <div class="description-container">
    <div class="banner">
      <div class="video">
        <iframe
          src="https://www.youtube.com/embed/ehIWwKu2rw8"
          title="Hotstar Specials Dahan | Official Trailer | 16th September | DisneyPlus Hotstar"
          frameborder="0"
          allow="accelerometer; 
          autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="movie-meta">
        <h1>{{ movie.name ? movie.name : "Liger (New Release)" }}</h1>
        <div class="movie-meta-additional">
          <p class="movie-meta-durations">{{movie.duration? movie.duration : '2hr 10m'}}</p>
          <p class="movie-meta-genre">{{movie.genre? movie.genre : 'Drama'}}</p>
          <p class="movie-meta-rating">{{movie.rating? movie.rating : 'UA'}}</p>
        </div>
        <button class="book-ticket" @click="bookTickets()">Book Tickets</button>
      </div>
    </div>
    <div class="description-body">
      <h3 class="description-body-header">About the movie</h3>
      <p class="description-body-para"> 
        <!-- Data must come from Backend using GET: /movies/:movieId -->
        The journey of Liger, from Karimnagar to Mumbai, from a nobody to a
        competitor, in his search for recognition while navigating his
        weaknesses, relationships, and love life.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Vero enim fuga quia eligendi exercitationem repudiandae nostrum totam voluptates sequi,
        voluptatibus quam nemo similique suscipit impedit soluta inventore incidunt consequatur
        assumenda labore sunt adipisci voluptatum illum nulla! Veritatis voluptates, ratione eveniet quod
        voluptatibus aspernatur sed iure maiores exercitationem optio placeat. Eius?        
      </p>
      <p class="description-body-additional-para">
        Copyright BookOurShow 2022 &copy;<br>
        <!-- Static Data for Demo purpose -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim,
        beatae et quisquam ipsam, quos at similique veniam nam accusantium rem excepturi veritatis,
        odio illo. Mollitia est odit voluptas ratione.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quibusdam quisquam optio laborum, nihil distinctio expedita officia voluptate dolore, suscipit doloremque saepe iste! Aliquid nemo iusto rerum minus quibusdam. Assumenda.
      </p>
    </div>
  </div>
</template>
<script src="./scripts/DescriptionComponent.js">
</script>
<style >
.description-container {
  margin: 0;
  padding: 0em;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.banner {
  height: 50vh;
  width: 100%;
  display: flex;
  background-color: black;
}

.banner iframe {
  height: 90%;
  width: 60%;
  border-radius: 1em;
  margin: 1em 3em;
}

.banner .movie-meta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
}

.banner .movie-meta {
  color: #f9f9f9;
}

.banner .movie-meta-additional {
  margin-top: 0em;
  padding: 0.5em;
  width: 100%;
  border-radius: 0.3em;
  color: white !important;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: flex-start;
}

.movie-meta-durations,
.movie-meta-genre,
.movie-meta-rating {
  background-color: rgb(95, 95, 95);
  padding: 0.5em;
  margin: 0.5em;
  width: 30%;
  border-radius: 0.3em;
  color: white;
  font-size: small;
  text-align: center;
}
.movie-meta-durations:hover,
.movie-meta-genre:hover,
.movie-meta-rating:hover {
  /* text-decoration: underline; */
  cursor: pointer;
}

.description-body {
  margin: 1em;
  border-radius: 1em;
  background-color: whitesmoke;
  width: 95%;
  height: 40vh;
  overflow: scroll;
}

.description-body .description-body-header {
  padding: 0.5em 1em;
  color: gray;
}

.description-body .description-body-para {
  font-size: medium;
  margin: .5em 1em;
  padding: 1em;
  width: 90vw;
  text-align: justify;
  background-color: white;
  border-radius: 1em;
  overflow: scroll;
}
.description-body .description-body-additional-para{
  font-size: medium;
  color: gray;
  margin: .5em 1em;
  padding: 1em;
  width: 95%;
  text-align: justify;
}
.book-ticket {
  border: none;
  border-radius: 0.5em;
  background-color: #f84464 !important;
  color: white;
  padding: 0.3em 1em;
  transition: all 0.2s;
}
.book-ticket:hover {
  cursor: pointer;
  background-color: #d52344 !important;
}
.img-fluid {
  margin-left: 20%;
}
.banner img {
  height: 200px;
}

.button1 {
  margin-left: 90px;
  background-color: rgb(249, 39, 74) !important;
  border-color: none;
  border-radius: 10px;
  border: 0px solid;
  height: 40%;
  width: 10%;
  margin-top: 14%;
}
.btn-outline-dark {
  margin-top: 30px;
  height: 90% !important;
  width: 10%;
  color: black;
  margin-left: 18px;
}

@media screen and (max-width: 500px) {
  .banner .movie-meta-additional {
    margin-top: 0em;
    padding: 2.5em;
    width: 128%;
    border-radius: 0.3em;
    color: white !important;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
  }
  .movie-meta {
    font-size: small;
  }
  .movie-meta h1 {
    font-size: medium !important;
  }
  .movie-meta-durations,
  .movie-meta-genre,
  .movie-meta-rating {
    font-size: x-small !important;
  }

  .description-body .description-body-para, .description-body .description-body-additional-para{
    font-size: small !important;
  }
}
</style>
