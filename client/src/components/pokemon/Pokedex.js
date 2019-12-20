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
        <List pokemons={this.state.pokemons} releasePokemon={this.releasePokemon} updatePokemon={this.updatePokemon} />
      </>
    )
  }
}

export default Pokedex;