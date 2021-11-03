import React from "react";


function renderBadge(movieRating){
    if(movieRating > 8){
        return <p className="badge"><strong>POPULAR</strong></p>
    }
}

function Movie(props){
    
    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>

            { renderBadge(props.rating) }

        </div>
    );
}

export default Movie;
