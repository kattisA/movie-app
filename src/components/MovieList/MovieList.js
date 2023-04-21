import React from 'react';

const MovieList = (props) => {
    const isFavourite = (movie) => {
        console.log(props.favouriteMovies)
        return !!props.favouriteMovies?.some(m => m.imdbID === movie.imdbID);
    }
    return (
        <>
            {props.movies?.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    {movie.Poster !== "N/A" ?
                        <img src={movie.Poster} alt={"Poster of " + movie.Title}></img>
                        :
                        <img src="/assets/movie_placeholder.png" alt={"Poster of " + movie.Title}></img>
                    }
                    <div className="overlay">
                        <div className="movie-title">{movie.Title}</div>
                        <div className="float-right heart-icon"  onClick={() => props.handleFavouritesClick(movie)}>
                        {isFavourite(movie) ?

                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="1.5rem"
                                 height="1.5rem"
                                 fill="#ff5352"
                                 className="bi bi-heart-fill"
                                 viewBox="0 0 16 16"
                            >
                                <path fillRule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="1.5rem"
                                 height="1.5rem"
                                 fill="white"
                                 fillOpacity="0.5"
                                 className="bi bi-heart-fill"
                                 viewBox="0 0 16 16"
                            >
                                <path fillRule="evenodd"
                                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                        }
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
