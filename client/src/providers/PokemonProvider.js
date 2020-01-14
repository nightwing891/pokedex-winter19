import React, { Component } from 'react';
import axios from 'axios';

export const PokemonContext = React.createContext();

export const PokemonConsumer = PokemonContext.Consumer;

class PokemonProvider extends Component {
  state = { pokemons: [] }

  componentDidMount() {
    // grabs all the pokemon on the rails end
    axios.get('/api/pokemons')
      .then( res => {
        this.setState({ pokemons: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  } 

  addPokemon = (pokemon) => {
    // add to the back end
    axios.post('/api/pokemons', pokemon)
      .then( res => {
        // add to our front end / state
        const { pokemons } = this.state
        this.setState({ pokemons: [...pokemons, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  updatePokemon = (id, pokemon) => {
    // update to the back end
    axios.put(`/api/pokemons/${id}`, pokemon)
      .then( res => {
        // update it in our state
        const pokemons = this.state.pokemons.map( p => {
          if (p.id === id) {
            return res.data
          }
          return p 
        })
        this.setState({ pokemons })
      })
      .catch( err => {
        console.log(err)
      })
  }

  releasePokemon = (id) => {
    // delete in the back end
    axios.delete(`/api/pokemons/${id}`)
      .then(res => {
        // delete in the state
        const { pokemons } = this.state
        this.setState({ pokemons: pokemons.filter( p => p.id !== id)})
      })
      .catch( err => {
        console.log(err)
      }) 
  }

  render() {
    return(
      <PokemonContext.Provider value={{
        ...this.state,
        addPokemon: this.addPokemon,
        updatePokemon: this.updatePokemon,
        releasePokemon: this.releasePokemon
      }}>
        { this.props.children }
      </PokemonContext.Provider>
    )
  }
}

export default PokemonProvider;

// import { PokemonConsumer, PokemonContext }
// import PokemonProvider