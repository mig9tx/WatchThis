



$(document).ready(function () {
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

    var popularMovieGenres = ['Action', 'Cartoon', 'Drama', 'Horror', 'Romance', 'Comedy', 'Documentary', 'Animation'];
    var allMovieGenres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western'];

    var popularTvGenres = ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Reality'];
    var allTvGenres = ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Kids', 'Mystery', 'News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'Talk', 'War & Politics', 'Western'];

    function initialPage() {
        $('#button-area').empty();
        var startButton = $('<button>');
        startButton.addClass('button');
        startButton.attr('id', 'start-button');
        startButton.text('Start');
        $('#button-area').append(startButton);
    }
    initialPage();


    function displayMovieOrTv() {
        $('#button-area').empty();

        var movieChoiceButton = $('<button>');
        movieChoiceButton.addClass('button');
        movieChoiceButton.attr('id', 'movie-choice');
        movieChoiceButton.text('Movies');

        $('#button-area').append(movieChoiceButton);

        var tvChoiceButton = $('<button>');
        tvChoiceButton.addClass('button');
        tvChoiceButton.attr('id', 'tv-choice');
        tvChoiceButton.text('TV Shows');

        $('#button-area').append(tvChoiceButton);
    }

    $('#start-button').on('click', function () {
        displayMovieOrTv();
    });

    function displayMovieGenreButtons() {
        $('#button-area').empty();
        for (var i = 0; i < popularMovieGenres.length; i++) {
            var genreButton = $('<button>');
            genreButton.addClass('button');
            genreButton.attr('data-name', popularMovieGenres[i]);
            genreButton.text(popularMovieGenres[i]);
            $('#button-area').append(genreButton);
        }

    }

    function displayTvGenreButtons() {
        $('#button-area').empty();
        for (var i = 0; i < popularTvGenres.length; i++) {
            var genreButton = $('<button>');
            genreButton.addClass('button');
            genreButton.attr('data-name', popularTvGenres[i]);
            genreButton.text(popularTvGenres[i]);
            $('#button-area').append(genreButton);
        }
    }


    $(document).on('click', '#movie-choice', function () {
        displayMovieGenreButtons();
    });

    $(document).on('click', '#tv-choice', function () {
        displayTvGenreButtons();
    });

    // var movieId = "363088";
    // var decade = "release_date.gte=1980-01-01&release_date.lte=1989-12-30"
    // //Genre Ids:
    // // 
    // var genreId = "35"

    // // query that searches for movies in a specific decade and genre
    // $.ajax({
    //     url: "https://api.themoviedb.org/3/discover/movie?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" + decade + "&with_genres=" + genreId + "",
    //     method: "GET"
    // }).then(function (response5) {
    //     console.log(response5);
    // });
    // // query that searches for tv show based on genre
    // $.ajax({
    //     url: "https://api.themoviedb.org/3/discover/tv?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId + "",

    //     method: "GET"
    // }).then(function (response2) {
    //     console.log(response2);
    // });

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

    var movieId = "105";
    var decade = "release_date.gte=1990-01-01&release_date.lte=1999-12-30";
    //Genre Ids:
    // 
    var genreId = "35";
    movieInfo = '';

    // query that searches for movies in a specific decade and genre
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/movie?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" + decade + "&with_genres=" + genreId + "",
        method: "GET"
    }).then(function (response5) {
        // for (i = 0; i < response5.length; i++) {
        var row = $("<tr>");
        row.append("<td><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2/'" + response5.results[0].poster_path + "'</img></td>");
        row.append("<td>" + response5.results[0].title + "</td>");
        row.append("<td>" + response5.results[0].release_date + "</td>");
        $('tbody').append(row);
        // }
        console.log(response5.results[0].poster_path); //poster
        console.log(response5.results[0].title); //movie title
        console.log(response5.results[0].release_date); //release date
        console.log(response5.results[0].overview); //overview
        console.log(response5.results[0].id); //movie id to be used to pull more information about the movie

        console.log(response5);
    });

    // gets a list of credits where we can obtain the list of actors in a specific movie
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=de7bfe759d702ca3a0225b7b3285f2b3",
        method: "GET"
    }).then(function (movieInfo) {

        console.log(movieInfo.cast[0].name);
        console.log(movieInfo.cast[1].name);
        console.log(movieInfo.cast[2].name);
        console.log(movieInfo.cast[3].name);
        console.log(movieInfo.cast[4].name);
        console.log(movieInfo);
    });

    // query that searches for tv show based on genre
    $.ajax({
        url: "https://api.themoviedb.org/3/discover/tv?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreId + "",

        method: "GET"
    }).then(function (response2) {
        console.log(response2);
    });



    //Url for the movie poster https://image.tmdb.org/t/p/w600_and_h900_bestv2/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg
    //Obtain url .jpg link from array of results results[i].poster_path



});