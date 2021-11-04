import moviesArr from "../data/movies.json";
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import React from 'react';

class App extends React.Component {

  state = {
    moviesToDisplay: moviesArr
  };


  createMovie = (newMovieDetails) => {

    //Add a unique id for the new movie (fixes 'Each child in a list should have a unique "key" prop.')
    const arrayOfIds = this.state.moviesToDisplay.map(movie => movie.id);
    newMovieDetails.id = Math.max(...arrayOfIds) + 1;

    //Keep data consistency for the new movies
    newMovieDetails.genres = [];
    newMovieDetails.imgURL = "";

    this.setState((prevState) => {
      const newList = [newMovieDetails, ...prevState.moviesToDisplay];
      return { moviesToDisplay: newList };
    });
  }


  renderClassicsOnly = () => {
    this.setState((prevState, props) => {
      const newList = prevState.moviesToDisplay.filter((movie) => {
        return movie.year < 2000;
      });

      return { moviesToDisplay: newList }
    });
  }

  render() {
    return (
      <div className="App">
        <Header listOfMovies={this.state.moviesToDisplay} />
        <Main listOfMovies={this.state.moviesToDisplay} renderClassics={this.renderClassicsOnly} addMovieHandler={this.createMovie} />
        <Footer />
      </div>
    );
  }
}

export default App;
