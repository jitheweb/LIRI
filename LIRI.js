require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var spotify = new Spotify(keys.spotify);

var input = process.argv;
var command = input[2];

var name = "";

for (var i = 3; i < input.length; i++) {
  if (i > 3 && i < input.length) {
    name = name + "+" + input[i];
  } else {
    name += input[i];
  }
}

Switch();
function Switch() {
  switch (command) {
    case "concert-this":
      concert(name);
      break;

    case "spotify-this":
      song(name);
      break;

    case "movie-this":
      Omdb(name);
      break;

    case "do-what-it-says":
      doWhatItSays();
      break;

    default:
      console.log("Invalid input, try again.");
  }
}

function concert() {
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    name +
    "/events?app_id=4820a4e237c663a14a1ca845e542d9be,";
  console.log(queryUrl);
  request(queryUrl, function(error, response, body) {
    var body = JSON.parse(body);
    if (!error && response.statusCode === 200) {
      body.forEach(function(element) {

        console.log("================Concert Info================")
        console.log("Venue name - " + element.venue.name);
        console.log(
          "Venue Location - " +
            element.venue.city +
            " , " +
            element.venue.region +
            "  - " +
            element.venue.country
        );
        console.log("Date - " + moment(element.datetime).format("MM/DD/YYYY"));
        console.log("============================================")
      });
    }
  });
}

function song() {
  spotify.search({ type: "track", query: name, limit: "10" }, function(
    error,
    data
  ) {
    if (error) {
      return console.log("Error occurred: " + error);
    }

    var song = data.tracks.items[0];
    console.log("================Song Info================")
    console.log("Artist(s) - " + song.artists[0].name);
    console.log("Title - " + song.name);
    console.log("Preview link - " + song.preview_url);
    console.log("Album - " + song.album.name);
    console.log("=========================================")
  });
}

function Omdb() {

  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    name +
    "&y=&plot=short&tomatoes=true&apikey=cd353a1b";

  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var body = JSON.parse(body);
      console.log("================Movie Info================")
      console.log("Title - " + body.Title);
      console.log("Release Year: - " + body.Year);
      console.log("IMDB Rating - " + body.imdbRating);
      console.log("Rotten Tomatoes Rating - " + body.tomatoRating);
      console.log("Country where the movie was produced - " + body.Country);
      console.log("Language - " + body.Language);
      console.log("Plot - " + body.Plot);
      console.log("Actors - " + body.Actors);
      console.log("==========================================")
    }
  });
}

function doWhatItSays() {
  fs.readFile("./random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }
  });
  
}

