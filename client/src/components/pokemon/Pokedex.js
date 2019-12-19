import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import PokeForm from './PokeForm';

class Pokedex extends Component {
  state = { pokemons: [], adding: false }

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

  toggleAdd = () => this.setState({ adding: !this.state.adding })

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
    // update it in our state
  }

  releasePokemon = (id) => {
    // delete in the back end
    // delete in the state
  }

  render() {
    const { adding } = this.state
    return(
      <>
        <h1>Pokedex</h1>
        {
          adding ?
          <PokeForm addPokemon={this.addPokemon} toggleAdd={this.toggleAdd} />
          :
          <button onClick={this.toggleAdd}>Add Pokemon</button>
        }
        <List pokemons={this.state.pokemons} />
      </>
    )
  }
}

export default Pokedex;