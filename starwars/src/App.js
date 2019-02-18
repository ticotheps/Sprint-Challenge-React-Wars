import React, { Component } from 'react';
import CharacterList from "./components/CharacterList";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="Header-container">
          <h1 className="Header">Welcome to React Wars!</h1>
        </div>
        <div className="character-list-container">
          <p className="instructions">Hover over each card to reveal a React Wars character and their details!</p>
          <CharacterList starwarsChars={this.state.starwarsChars} />
        </div>
      </div>
    );
    // console.log(this.state.starwarsChars);
  }
  
}

export default App;
