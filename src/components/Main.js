import React from "react";
import moviesArr from "../data/movies.json";


function Main(){

    return (
        <>
            { moviesArr.map( (movie) => {
                return (
                    <div key={movie.id} className="movie">
                        <h2>{movie.title}</h2>
                        <p>Year: {movie.year}</p>
                        <p>Rating: {movie.rating}</p>
                    </div>
                );
            }) }
        </>
    );
}

export default Main;