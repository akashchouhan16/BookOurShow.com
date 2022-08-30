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
          <p class="movie-meta-durations">2hr 10m</p>
          <p class="movie-meta-genre">Action</p>
          <p class="movie-meta-rating">UA</p>
        </div>
        <button class="book-ticket" @click="bookTickets()">Book Tickets</button>
      </div>
    </div>
    <div class="description-body">
      <h3 class="description-body-header">About the movie</h3>
      <p class="description-body-para">
        The journey of Liger, from Karimnagar to Mumbai, from a nobody to a
        competitor, in his search for recognition while navigating his
        weaknesses, relationships, and love life.
      </p>
    </div>
  </div>
</template>
<script src="../js/DescriptionComponent.js">
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
  height: 30vh;
}

.description-body .description-body-header {
  padding: 0.5em 1em;
  color: gray;
}

.description-body .description-body-para {
  font-size: small;
  margin: 0.4em;
  padding: 0.5em 1em;
  width: 70%;
  text-align: left;
}

.book-ticket {
  border: none;
  border-radius: 0.5em;
  background-color: #f84464 !important;
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
</style>
