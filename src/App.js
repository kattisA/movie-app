import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('Star Wars');
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const apiKey = '5a0f2c9d';

    const fetchMovies = async (searchValue) => {
        try {
            const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

            const response = await fetch(url);
            const movieData = await response.json();

            if (movieData.Search) {
                setMovies(movieData.Search)
            }
        } catch (error) {
            setErrorMessage('An error occurred while fetching movies from OMDB');
            setMovies([]);
        }

    }

    useEffect(() => {
        fetchMovies(searchValue);
    }, [searchValue]);

    useEffect(() => {
        const movieFavourites = JSON.parse(
            localStorage.getItem('movie-favourites'));

        if (movieFavourites) {
            let uniqueMovieFavourites = movieFavourites.filter(
                (value, index, array) => array.findIndex(
                    (v) => v.imdbID === value.imdbID) === index);
            setFavouriteMovies(uniqueMovieFavourites);
        }
    }, []);


    function setFavouriteAndSave(list) {
        setFavouriteMovies(list);
        localStorage.setItem('movie-favourites', JSON.stringify(list));
    }

    const toggleFavouriteMovie = (movie) => {
        const isFavourite = !!favouriteMovies?.some(m => m.imdbID === movie.imdbID);
        if (isFavourite) {
            const newFavouriteList = favouriteMovies.filter(
                (favourite) => favourite.imdbID !== movie.imdbID
            );

            setFavouriteAndSave(newFavouriteList);
        } else {
            let newFavouriteList = [...favouriteMovies, movie];
            let uniqueList = newFavouriteList.filter(
                (value, index, array) => array.findIndex(
                    (v) => v.imdbID === value.imdbID) === index);
            setFavouriteAndSave(uniqueList);
        }
    }

    return (
        <div className='container-fluid movie-scroll' role="main">
            <div className="d-flex justify-content-center my-5">
                <div>
                    <h1 className="heading">Movie Search</h1>
                </div>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>

            </div>
            {errorMessage && (
                <div className="alert alert-danger d-flex justify-content-center" role="alert">
                    {errorMessage}
                </div>
            )}
            <div className='row'>

                <MovieList movies={movies}
                           favouriteMovies={favouriteMovies}
                           handleFavouritesClick={toggleFavouriteMovie}
                />
            </div>
            <div className="d-flex justify-content-center my-4">
                <h2 className="heading">My favourite movies</h2>
            </div>
            <div className="row">
                <MovieList movies={favouriteMovies}
                           favouriteMovies={favouriteMovies}
                           handleFavouritesClick={toggleFavouriteMovie}
                />
            </div>
            <div className="d-flex justify-content-center my-4">
                <a href="https://github.com/kattisA">Created by Kattis</a>
            </div>
        </div>
    );
};

export default App;