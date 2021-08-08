import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import pokemons from './data';
import './Pokedex.css';
class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonIndex: 0,
      pokemons: pokemons,
    };
  }

  pokemonsType = this.props.pokemons.map(({ type }) => type);

  filterPokemons = (type) => {
    const { pokemons } = this.props;
    if (type === 'all') {
      this.setState({
        pokemons: pokemons
      });
    } else {
      this.setState({
        pokemons: pokemons.filter((pokemon) => pokemon.type === type)
      })
    }
  }

  //setFilteredPokemons = (filteredType) => this.setState({ filteredType:});

  render() {
    const { pokemons } = this.state;
    return (
      <main>
        <div className="pokemons">
          {pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)}
        </div>
        <div className="buttons-container">
          {this.pokemonsType.map((type, index) => <Button key={index} onClick={() => this.filterPokemons(type)}
            type={type}
            className={type} >
            {type}
          </Button>)}
        </div>
        <div className="buttons-container">
          <button
            onClick={() => this.filterPokemons('all')}
          >
            all
          </button>
        </div>
      </main>

    );
  }
}

export default Pokedex;