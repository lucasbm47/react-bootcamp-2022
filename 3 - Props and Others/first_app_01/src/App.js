import React from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

class ListInitialPokemons extends React.Component {
  render(){ //Dont forget the parenthesis after render()! It's like any other function
      let pokemon_list = ["Charmander","Squirtle","Bulbasaur","Kakuna","Caterpie"];
      return(
        <div>
          <h1><code>Available Pokemons</code></h1>
          <ul>
              {pokemon_list.map(curr_pokemon => <li>{curr_pokemon}</li>)}
          </ul>
        </div>
          
      );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is the top of the page!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p><ListInitialPokemons/></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
