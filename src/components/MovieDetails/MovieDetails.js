import React, { useState, useEffect } from 'react';

function MovieDetails(props) {
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${props.id}&apikey=5a0f2c9d`)
            .then(res => res.json())
            .then(data => {
                setMovieDetail({rating: data.imdbRating, description: data.Plot});
            });
    }, [props.id]);

    return (
        <div>
            <div>
                {movieDetail ? (
                    <>
                        <p>Movie Rating: {movieDetail.rating}</p>
                        <p>Description: {movieDetail.description}</p>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default MovieDetails;