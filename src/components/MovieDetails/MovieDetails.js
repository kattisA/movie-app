import React, { useState, useEffect } from 'react';

function MovieDetails(props) {
    const [movieDetail, setMovieDetail] = useState(null);

    const fetchMovieDetails = async (props) => {
        try {
            const url = `https://www.omdbapi.com/?i=${props.id}&apikey=${props.apiKey}`;
            const response = await fetch(url);
            const movieData = await response.json();

            if(movieData) {
                setMovieDetail({
                    rating: movieData.imdbRating,
                    description: movieData.Plot,
                    year: movieData.Year
                });
            }

        } catch(error) {
            console.log(error);
        }

    }

    useEffect(() => {
        fetchMovieDetails(props)
    }, [props]);

    return (
        <div>
            <div>
                {movieDetail ? (
                    <>
                        <div className="d-flex justify-content-between p-2">
                            {movieDetail.rating !== "N/A" ?
                                <span
                                    className="ratingBadge badge badge-pill badge-light ">Rating {movieDetail.rating}</span> :
                                <></>
                            }
                            <span className="yearBadge badge badge-pill badge-light">{movieDetail.year}</span>
                        </div>
                        {movieDetail.description !== "N/A" ?
                            <div className="card-text">{movieDetail.description}</div> :
                            <div className="font-italic">No description available.</div>
                        }
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default MovieDetails;