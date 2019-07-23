# LIRI

LIRI-Bot
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. LIRI uses the following commands:

concert-this

spotify-this-song

movie-this

do-what-it-says

Technologies used:

Node.js
Javascript
npm packages: OMDB, bands in town, spotify
How to Run LIRI-Bot

1. node LIRI.js concert-this will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

  -  Name of the venue
  -  Venue location
  -  Date of the Event (use moment to format this as "MM/DD/YYYY")

2: node liri.js spotify-this <artist or song> This will show the following information about the artist/song in your terminal/bash window.
 
  - The song's name
  - A preview link of the song from Spotify
  - The album that the song is from
  
3: node liri.js movie-this <movie name here>

This will output the following information to your terminal/bash window:

  - Title of the movie.
  - Relase year Year.
  - IMDB Rating of the movie.
  - Country where the movie was produced.
  - Language of the movie.
  - Plot of the movie.
  - Actors in the movie.
  - Rotten Tomatoes Rating.
  - Rotten Tomatoes URL.

4: node liri.js do-what-it-says

This will output the command placed in random.txt file

follow this link for the DEMO
https://drive.google.com/open?id=1X_Gj4589Sv834cC2XR5HxsY0KJZRLI4O
