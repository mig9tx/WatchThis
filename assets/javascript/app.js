$(document).ready(function) {
    function initialize() {
        var button = $"#ID"
    }
}

var movieId = "363088";
    var decade = "release_date.gte=1980-01-01&release_date.lte=1989-12-30"
    //Genre Ids:
        // 
    var genreId = "35"

// query that searches for movies in a specific decade and genre
$.ajax({
    url: "https://api.themoviedb.org/3/discover/movie?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" + decade + "&with_genres=" + genreId + "",
    method: "GET"
}).then(function (response5) {
    console.log(response5);
});
// query that searches for tv show based on genre
$.ajax({
    url: "https://api.themoviedb.org/3/discover/tv?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId+ "",

    method: "GET"
}).then(function (response2) {
    console.log(response2);
});

//intro screen
    //brief description of app
    //begin or start button
    //on click event that hides intro and displays media type picture buttons

//display media
    //TV
    //Movie
    //on click event that saves variable, hides media buttons and displays genre buttons

//display genres
    //drama, action, romance, horror, animated, comedy, music, documentary
    //on click event that saves variable and hides genre

//for movies, display decades for the movie types
    //classics < 80s
    //80s
    //90s
    //2000s
    //2010s
    //on click event that saves value, hides buttons and grabs query with the values saved
        //throughout questionnaire
        //It also will display the top 10 choices in descenting popularity
            //displayed as buttons with images of the posters



// Initialize Firebase
var config = {
    apiKey: "AIzaSyC9tSko0pe-mNXsTob_IUpRhxJFbPSkQiM",
    authDomain: "groupproject1-56d7d.firebaseapp.com",
    databaseURL: "https://groupproject1-56d7d.firebaseio.com",
    projectId: "groupproject1-56d7d",
    storageBucket: "groupproject1-56d7d.appspot.com",
    messagingSenderId: "93264815531"
};
firebase.initializeApp(config);
