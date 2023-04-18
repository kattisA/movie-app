import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
        <>
            {props.movies?.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt={movie.Title}></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className="overlay">
                        <div className="movie-title">{movie.Title}</div>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
