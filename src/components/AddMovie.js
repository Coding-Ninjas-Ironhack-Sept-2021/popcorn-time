import React, { Component } from 'react';
import "./AddMovie.css"

class AddMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            year: "",
            rating: ""
        };
    }

    handleInputChange = (event) => {
        const nameOfTheInput = event.target.name;
        this.setState({[nameOfTheInput]: event.target.value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        
        const movieInfo = {
            title: this.state.title,
            year: this.state.year,
            rating: this.state.rating,
        }

        // call a method in parent component to create the new movie (we're passing an object with the details of the new movie)
        this.props.addMovieHandler(movieInfo);

        //reset form
        this.setState({
            title: "",
            year: "",
            rating: "",
        })

    }

    render() {
        return (
            <div className="AddMovie">
                <h2>Add a new Movie</h2>
                
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Title:
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleInputChange } />
                    </label>

                    <label>
                        Year:
                        <input 
                            type="number" 
                            name="year" 
                            min="1900"
                            max="2100"
                            value={this.state.year} 
                            onChange={this.handleInputChange} />
                    </label>

                    <label>
                        Rating:
                        <input 
                            type="number" 
                            name="rating" 
                            min="1"
                            max="10"
                            value={this.state.rating} 
                            onChange={this.handleInputChange} />
                    </label>
                    
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMovie;
