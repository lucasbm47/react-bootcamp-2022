import logo from './logo.svg';
import './App.css';
import Pokecard from './Pokecard';

function App() {
  return (
    <div className="App">
      <Pokecard id = {4} name = "Charmander" type = "fire" exp = "38"/>
    </div>
  );
}

export default App;
