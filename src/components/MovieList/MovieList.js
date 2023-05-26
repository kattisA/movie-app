import React from 'react';
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieList = (props) => {
    const isFavourite = (movie) => {
        return !!props.favouriteMovies?.some(m => m.imdbID === movie.imdbID);
    }

    const heartIcon = (fillColor, strokeColor) => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="1.5rem"
                 height="1.5rem"
                 fill={fillColor}
                 stroke={strokeColor}
                 strokeWidth="1"
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
                    <div className="card border-0" style={{width: '18rem'}}>
                        {movie.Poster !== "N/A" ?
                            <img className="card-img-top"  src={movie.Poster} alt={"Poster of " + movie.Title}></img>
                            :
                            <img className="card-img-top"  src="./movie_placeholder.PNG" alt="A grey movie projector"></img>
                        }
                            <div className="card-body">
                                <div className="card-title title">{movie.Title}</div>
                                <MovieDetails id={movie.imdbID} apiKey={props.apiKey}/>
                            </div>
                        <div className="card-body footer right">
                            <div className=" heart-icon float-right mr-2 mb-0"  onClick={() => props.handleFavouritesClick(movie)}>
                                {isFavourite(movie) ?

                                    heartIcon("#ff5352", "#b23a39")
                                    :
                                    heartIcon("#f9f6ee", "#212529")
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
