import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('Star Wars');
    const [favouriteMovies, setFavouriteMovies] = useState([]);

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

    function setFavouriteAndSave(list) {
        setFavouriteMovies(list);
        saveToLocalStorage(list);
    }

    const toggleFavouriteMovie = (movie) => {
        const isFavourite = !!favouriteMovies?.some(m => m.imdbID === movie.imdbID);
        if(isFavourite){
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
        <div className='container-fluid movie-app' role="main">
            <div className="row d-flex align-items-center mt-4 mb-4">
                <div className="col">
                    <h1>Movies</h1>
                </div>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <MovieList movies={movies}
                           favouriteMovies={favouriteMovies}
                           handleFavouritesClick={toggleFavouriteMovie}
                />
            </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
                <div className="col">
                    <h2>Favourites</h2>
                </div>
            </div>
            <div className="row">
                <MovieList movies={favouriteMovies}
                           favouriteMovies={favouriteMovies}
                           handleFavouritesClick={toggleFavouriteMovie}
                />
            </div>
        </div>
    );
};

export default App;