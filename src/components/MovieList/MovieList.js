import React from 'react';

const MovieList = (props) => {
    const isFavourite = (movie) => {
        return !!props.favouriteMovies?.some(m => m.imdbID === movie.imdbID);
    }

    const heartIcon = (color) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="1.5rem"
                 height="1.5rem"
                 fill={color}
                 className="bi bi-heart-fill"
                 viewBox="0 0 16 16"
            >
                <path fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
        )
    }
    return (
        <>
            {props.movies?.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3' key={index}>
                    {movie.Poster !== "N/A" ?
                        <img src={movie.Poster} alt={"Poster of " + movie.Title}></img>
                        :
                        <img src="/assets/movie_placeholder.png" alt={"Poster of " + movie.Title}></img>
                    }
                    <div className="overlay">
                        <div className="movie-title">{movie.Title}</div>
                        <div className="float-right heart-icon"  onClick={() => props.handleFavouritesClick(movie)}>
                        {isFavourite(movie) ?

                            heartIcon("#ff5352")
                            :
                            heartIcon("#f9f6ee")
                        }
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
