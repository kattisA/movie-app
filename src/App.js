import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourites";
import RemoveFavourites from "./components/RemoveFavourites";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    console.log(favouriteMovies)

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5a0f2c9d`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search)
        }
    }

    useEffect(() => {
        getMovieRequest(searchValue);
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

    const saveToLocalStorage = (items) => {
        localStorage.setItem('movie-favourites', JSON.stringify(items));
    }

    const addFavouriteMovie = (movie) => {

        let newFavouriteList = [...favouriteMovies, movie];
        let uniqueList = newFavouriteList.filter(
            (value, index, array) => array.findIndex(
                (v) => v.imdbID === value.imdbID) === index);
        setFavouriteMovies(uniqueList);
        saveToLocalStorage(uniqueList);

    }

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favouriteMovies.filter(
            (favourite) => favourite.imdbID !== movie.imdbID
        );

        setFavouriteMovies(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
    };

    return (
        <div className='container-fluid movie-app' role="main">
            <div className="row d-flex align-items-center mt-4 mb-4">
                <div className="col">
                    <h1>Movies</h1>
                </div>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <MovieList movies={movies}
                           favouriteComponent={AddToFavourites}
                           handleFavouritesClick={addFavouriteMovie}
                />
            </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <div className="col">
                    <h2>Favourites</h2>
                </div>
            </div>
            <div className="row">
                <MovieList movies={favouriteMovies}
                           favouriteComponent={RemoveFavourites}
                           handleFavouritesClick={removeFavouriteMovie}
                />
            </div>
        </div>
    );
};

export default App;