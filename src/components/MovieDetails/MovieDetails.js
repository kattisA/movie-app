import React, { useState, useEffect } from 'react';

function MovieDetails(props) {
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${props.id}&apikey=5a0f2c9d`)
            .then(res => res.json())
            .then(data => {
                setMovieDetail(
                    {
                        rating: data.imdbRating,
                        description: data.Plot,
                        year: data.Year
                    });
            });
    }, [props.id]);

    return (
        <div>
            <div>
                {movieDetail ? (
                    <>
                        <div className="d-flex justify-content-between p-2">
                            <span className="ratingBadge badge badge-pill badge-light ">Rating {movieDetail.rating}</span>
                            <span className="yearBadge badge badge-pill badge-light">{movieDetail.year}</span>
                        </div>
                        <div className="card-text">{movieDetail.description}</div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default MovieDetails;