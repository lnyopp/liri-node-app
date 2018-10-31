require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);

var liriReturn = process.argv[2];

switch (liriReturn) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;

    default: console.log(`liribot can search for information on your favorite songs,possible concerts, and movies. Just use the following commands after 'node liri.js' :
    'spotify-this-song' followed by any song title you choose
    'movie-this' followed by any movie title
    *make sure to use quotes for multi-word titles* `)
};