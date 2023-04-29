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
                <div className='d-flex justify-content-start m-3' key={index}>
                    <div className="card border-0" style={{width: '18rem', color: "black"}}>
                        {movie.Poster !== "N/A" ?
                            <img className="card-img-top border-0"  src={movie.Poster} alt={"Poster of " + movie.Title}></img>
                            :
                            <img className="card-img-top"  src="/assets/movie_placeholder.png" alt={"Poster of " + movie.Title}></img>
                        }
                            <div className="card-body">
                                <div className="movie-title">{movie.Title}</div>

                               { /* TODO Add description of the movie in this section issue #3
                                    <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>*/}
                            </div>
                        <div className="card-body">
                            <div className="float-right heart-icon"  onClick={() => props.handleFavouritesClick(movie)}>
                                {isFavourite(movie) ?

                                    heartIcon("#ff5352")
                                    :
                                    heartIcon("#f9f6ee")
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;
