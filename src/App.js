import React, {
   useState,
   useEffect,
   useCallback
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import PropTypes from "prop-types";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = "https://www.omdbapi.com/";

const App = () => {
   // Declare state variables using the useState hook
   const [movies, setMovies] = useState([]);
   const [favouriteMovies, setFavouriteMovies] = useState([]);

   // Function to add a movie to the favourites list
   const addFavouriteMovie = useCallback((movie) => {
      setFavouriteMovies((prevFavouriteMovies) => [
         ...prevFavouriteMovies,
         movie,
      ]);
   }, []);

   // Function to remove a movie from the favourites list
   const removeFavouriteMovie = useCallback((movie) => {
      setFavouriteMovies((prevFavouriteMovies) =>
         prevFavouriteMovies.filter((favourite) => favourite.imdbID !== movie.imdbID)
      );
   }, []);

   // Function to handle a click on the favourites button
   const handleFavouritesClick = useCallback((movie) => {
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
   }, [addFavouriteMovie, favouriteMovies, removeFavouriteMovie]);

   // Function to fetch movie data from the OMDb API
   const getMovieRequest = useCallback(async (searchValue) => {
      const url = `${API_URL}?s=${searchValue}&apikey=${API_KEY}&plot=short`;

      const response = await fetch(url);
      const responseJson = await response.json();

      if (responseJson.Search) {
         // If the API response contains movie data, set the movies state variable
         const moviesWithDescriptions = await Promise.all(
            responseJson.Search.map(async (movie) => {
               const descriptionUrl = `${API_URL}?i=${movie.imdbID}&apikey=${API_KEY}&plot=short`;
               const descriptionResponse = await fetch(descriptionUrl);
               const descriptionResponseJson = await descriptionResponse.json();

               if (descriptionResponse Json.Plot) {
                  return {
                     ...movie,
                     Plot: descriptionResponseJson.Plot,
                  };
               } else {
                  return movie;
               }
            })
         );

         setMovies(moviesWithDescriptions);
      }

   }, [API_KEY]);

   // Use useEffect to make the API call when the component mounts or the search value changes
   useEffect(() => {
      getMovieRequest("Harry Potter");
   }, [getMovieRequest]);

   return ( <
      div className = "container-fluid movie-app" >
      <
      div className = "row d-flex align-items-center mt-4 mb-4" >
      <
      MovieList movies = {
         movies
      }
      handleFavouritesClick = {
         handleFavouritesClick
      }
      favouriteMovies = {
         favouriteMovies
      }
      /> < /
      div > <
      /div>
   );
};

// Use PropTypes to type-check the props passed to the MovieList component
App.propTypes = {
   movies: PropTypes.arrayOf(
      PropTypes.shape({
         imdbID: PropTypes.string.isRequired,
         Title: PropTypes.string.isRequired,
         Year: PropTypes.string.isRequired,
         Poster: PropTypes.string.isRequired,
         Plot: PropTypes.string,
      })
   ),
   favouriteMovies: PropTypes.arrayOf(
      PropTypes.shape({
         imdbID: PropTypes.string.isRequired,
         Title: PropTypes.string.isRequired,
         Year: PropTypes.string.isRequired,
         Poster: PropTypes.string.isRequired,
         Plot: PropTypes.string,
      })
   ),
   handleFavouritesClick: PropTypes.func.isRequired,
};
export default App;