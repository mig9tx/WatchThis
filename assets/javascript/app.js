$(document).ready(function () {

    // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyC9tSko0pe-mNXsTob_IUpRhxJFbPSkQiM",
    //     authDomain: "groupproject1-56d7d.firebaseapp.com",
    //     databaseURL: "https://groupproject1-56d7d.firebaseio.com",
    //     projectId: "groupproject1-56d7d",
    //     storageBucket: "groupproject1-56d7d.appspot.com",
    //     messagingSenderId: "93264815531"
    // };
    // firebase.initializeApp(config);

    // FUNCTIONS

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

    function displayMovieGenreButtons() {
        $('#button-area').empty();
        for (var i = 0; i < popularMovieGenres.length; i++) {
            var genreButton = $('<button>');
            genreButton.addClass('button movieGenreButtons');
            genreButton.attr('data-id', popularMovieGenres[i].id);
            genreButton.text(popularMovieGenres[i].name);
            $('#button-area').append(genreButton);
        }
        var allMovieGenresButton = $('<button>');
        allMovieGenresButton.addClass('button');
        allMovieGenresButton.attr('id', 'movieGenres')
        allMovieGenresButton.text('More Genres');
        $('#button-area').append(allMovieGenresButton);
    }

    function displayTvGenreButtons() {
        $('#button-area').empty();
        for (var i = 0; i < popularTvGenres.length; i++) {
            var genreButton = $('<button>');
            genreButton.addClass('button tvGenreButtons');
            genreButton.attr('data-id', popularTvGenres[i].id);
            genreButton.text(popularTvGenres[i].name);
            $('#button-area').append(genreButton);
        }
        var allTvGenresButton = $('<button>');
        allTvGenresButton.addClass('button');
        allTvGenresButton.attr('id', 'tvGenres')
        allTvGenresButton.text('More Genres');
        $('#button-area').append(allTvGenresButton);
    }

    function displayAllMovieGenres() {
        $('#button-area').empty();
        for (var i = 0; i < allMovieGenres.length; i++) {
            var allGenresButton = $('<button>');
            allGenresButton.addClass('button movieGenreButtons');
            allGenresButton.attr('data-id', allMovieGenres[i].id);
            allGenresButton.text(allMovieGenres[i].name);
            $('#button-area').append(allGenresButton);
        }
    }

    function displayAllTvGenres() {
        $('#button-area').empty();
        for (var i = 0; i < allTvGenres.length; i++) {
            var allGenresButton = $('<button>');
            allGenresButton.addClass('button tvGenreButtons');
            allGenresButton.attr('data-id', allTvGenres[i].id);
            allGenresButton.text(allTvGenres[i].name);
            $('#button-area').append(allGenresButton);
        }
    }

    function displayMovieDecadeButtons() {
        $('#button-area').empty();
        for (var i = 0; i < decades.length; i++) {
            var decadeButtons = $('<button>');
            decadeButtons.addClass('button decade-buttons');
            decadeButtons.attr('data-id', decades[i].id);
            decadeButtons.attr('movieOrTv', 'movie'); //value for url
            decadeButtons.text(decades[i].name);
            $('#button-area').append(decadeButtons);
        }
    }

    function displayTvDecadeButtons() {
        $('#button-area').empty();
        for (var i = 2; i < decades.length; i++) {
            var decadeButtons = $('<button>');
            decadeButtons.addClass('button decade-buttons');
            decadeButtons.attr('data-id', decades[i].id);
            decadeButtons.attr('movieOrTv', 'tv'); //value for url
            decadeButtons.text(decades[i].name);
            $('#button-area').append(decadeButtons);
        }
    }

    function getGenreData(btn) {
        genreData = $(btn).attr('data-id');
        console.log(genreData);
    }

    function getDecadeData(btn) {
        decadeData = $(btn).attr('data-id');
        movieOrTv = $(btn).attr('movieOrTv');
        console.log(decadeData);
        console.log(movieOrTv);
    }

    //CLICK EVENTS

    $('#start-button').on('click', function () {
        displayMovieOrTv();
    });

    $(document).on('click', '#movie-choice', function () {
        displayMovieGenreButtons();
    });

    $(document).on('click', '#tv-choice', function () {
        displayTvGenreButtons();
    });

    $(document).on('click', '#movieGenres', function () {
        displayAllMovieGenres();
    });

    $(document).on('click', '#tvGenres', function () {
        displayAllTvGenres();
    });

    $(document).on('click', '.movieGenreButtons', function () {
        getGenreData(this);

    });

    $(document).on('click', '.tvGenreButtons', function () {
        getGenreData(this);

    });

    $(document).on('click', '.tvGenreButtons', function () {
        displayTvDecadeButtons();
    });

    $(document).on('click', '.movieGenreButtons', function () {
        displayMovieDecadeButtons();
    });

    $(document).on('click', '.decade-buttons', function () {
        getDecadeData(this);
        getMovieData();
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


    var decadeData = "";
    var genreData = "";
    var movieOrTv = "";


    // query that searches for movies or tv shows in a specific decade and genre
    function getMovieData() {
        $.ajax({
            url: "https://api.themoviedb.org/3/discover/" + movieOrTv + "?api_key=de7bfe759d702ca3a0225b7b3285f2b3&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&" + decadeData + "&with_genres=" + genreData + "",
            method: "GET"
        }).then(function (response5) {
            $('#button-area').empty();
            for (i = 0; i < response5.results.length; i++) {
                var row = $("<tr class='castInfo'>");
                var movieId = response5.results[i].id;
                row.attr('movieId', movieId);
                row.append("<td><img src='https://image.tmdb.org/t/p/w600_and_h900_bestv2" + response5.results[i].poster_path + "' width='60px' length='90px'></img></td>");
                if (movieOrTv === "movie") {
                    row.append("<td>" + response5.results[i].title + "</td>");
                    row.append("<td>" + response5.results[i].release_date + "</td>");
                    row.attr('movieOrTvTitle', response5.results[i].title);
                    row.attr('posterURL', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + response5.results[i].poster_path);
                    row.attr('overview', response5.results[i].overview);
                    row.attr('date', response5.results[i].release_date);

                } else {
                    row.append("<td>" + response5.results[i].name + "</td>");
                    row.append("<td>" + response5.results[i].first_air_date + "</td>");
                    row.attr('movieOrTvTitle', response5.results[i].name);
                    row.attr('posterURL', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + response5.results[i].poster_path);
                    row.attr('overview', response5.results[i].overview);
                    row.attr('date', response5.results[i].first_air_date);
                }
                $('#button-area').append(row);
                console.log(response5.results[i].poster_path); //poster
                console.log(response5.results[i].title); //movie title
                console.log(response5.results[i].release_date); //release date
                console.log(response5.results[i].overview); //overview
                console.log(response5.results[i].id); //movie id to be used to pull more information about the movie
            }
            console.log(response5);

        });
    };

    $(document).on('click', '.castInfo', function () {
        $('#button-area').empty();
        getCreditsData(this);
    });

    // gets a list of credits where we can obtain the list of actors in a specific movie
    function getCreditsData(movieRow) {
        var movieId = $(movieRow).attr('movieId');
        var title = $(movieRow).attr("movieOrTvTitle");
        $.ajax({
            url: "https://api.themoviedb.org/3/" + movieOrTv + "/" + movieId + "/credits?api_key=de7bfe759d702ca3a0225b7b3285f2b3",
            method: "GET"
        }).then(function (movieInfo) {
            console.log(movieInfo);
            for (i = 0; i < 5; i++) {
                console.log(movieInfo.cast[i].name);
                $('#button-area').append(movieInfo.cast[i].name);
            }
            displayAll(movieRow);
            getGiphys(title);
        });
    }
});

function displayAll(movieRow) {
    var movieorTvPoster = $(movieRow).attr('posterURL');
    var movieorTvTitle = $(movieRow).attr('movieOrTvTitle');
    var date = $(movieRow).attr('date');
    var overview = $(movieRow).attr('overview');
    // var cast = $(movieRow).attr('');
    $('#button-area').prepend(overview);
    $('#button-area').prepend("Release Date" + date);
    $('#button-area').prepend(movieorTvTitle);
    $('#button-area').prepend("<img src='" + movieorTvPoster + "'width=100></img>");
};


function getGiphys(title) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + title + "&api_key=9eYxjIxpJY0AYEPAItWXZnXl50byaqGu&limit=6";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(response.data)
        for (var i = 0; i < results.length; i++) {
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifImage = $("<img></img>");
                // var p = $("<p>");
                // p.text("Rating: " + results[i].rating);
                gifImage.attr("src", results[i].images.fixed_height.url); //sets the source to the img element
                gifImage.addClass("gif"); //add the class gif for on.click identification
                gifImage.attr("width", "50px");
                $('#button-area').append(gifImage);
                console.log(results[i].rating);
            }
        }
    })
}




<<<<<<< HEAD

//Url for the movie poster https://image.tmdb.org/t/p/w600_and_h900_bestv2/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg
//Obtain url .jpg link from array of results results[i].poster_path
=======
});
>>>>>>> master
