import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

const App = () => {
  // Declare state variables using the useState hook
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  // Function to add a movie to the favourites list
  const addFavouriteMovie = (movie) => {
    const newFavouriteMovies = [...favouriteMovies, movie];
    setFavouriteMovies(newFavouriteMovies);
  };

  // Function to remove a movie from the favourites list
  const removeFavouriteMovie = (movie) => {
    const newFavouriteMovies = favouriteMovies.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavouriteMovies(newFavouriteMovies);
  };

    // Function to handle a click on the favourites button
  const handleFavouritesClick = (movie) => {
    const alreadyAdded = favouriteMovies.some(
      (favourite) => favourite.imdbID === movie.imdbID
    );

    // If it's already added, remove it from the favourites list
    if (alreadyAdded) {
      removeFavouriteMovie(movie);
          // If it's not added yet, add it to the favourites list
    } else {
      addFavouriteMovie(movie);
    }
  };

 // Function to fetch movie data from the OMDb API
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5a0f2c9d&plot=short`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
     // If the API response contains movie data, set the movies state variable
      const moviesWithDescriptions = await Promise.all(
        responseJson.Search.map(async (movie) => {
          const descriptionUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=5a0f2c9d&plot=short`;
          const descriptionResponse = await fetch(descriptionUrl);
          const descriptionResponseJson = await descriptionResponse.json();

          if (descriptionResponseJson.Plot) {
            movie.description = descriptionResponseJson.Plot;
          } else {
            movie.description = "No description available";
          }

          return movie;
        })
      );

      // Update the state variable for movies with the list of movies and their descriptions
      setMovies(moviesWithDescriptions);
    }
  };

  // Render the MovieList component and pass it the necessary props
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieList
          movies={movies}
          favouriteMovies={favouriteMovies}
          handleFavouritesClick={handleFavouritesClick}
          getMovieRequest={getMovieRequest}
          showPlot={true}
        />
      </div>
      <div className="row d-flex justify-content-center">
        <a href="https://github.com/kattisA">Created by Kattis</a>
      </div>
    </div>
  );
};

export default App;
