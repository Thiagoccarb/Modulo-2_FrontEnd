import pokemons from "./pokemon-components/data";
import Pokedex from "./pokemon-components/Pokedex";

function App() {
  return (
    <Pokedex pokemons={pokemons} />
  );
}

export default App;
