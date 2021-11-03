import React from "react";

function Movie(props){

    let badge;
    if(props.rating > 8) {
        badge = <p className="badge"><strong>POPULAR</strong></p>
    }

    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
            {badge}
        </div>
    );
}

export default Movie;
