import React from "react";

function Movie(props){

    return (
        <div className="movie">
            <h2>{props.title}</h2>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>

            { 
                props.rating > 8 ?
                <p className="badge"><strong>POPULAR</strong></p> : 
                "" 
            }

        </div>
    );
}

export default Movie;
