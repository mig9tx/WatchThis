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
// Giphy API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});