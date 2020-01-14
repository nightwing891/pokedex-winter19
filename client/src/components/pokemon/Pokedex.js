import React, { Component } from 'react';
import List from './List';
import PokeForm from './PokeForm';
import { PokemonConsumer } from '../../providers/PokemonProvider';
import { Btn } from './pokemonStyles';

// const styles = {
//   btnStyle: {
//     marginLeft: '5px',
//     color: 'blue',
//     background: 'green'
//   }
// }


class Pokedex extends Component {
  state = { pokemons: this.props.pokemons, adding: false }

  toggleAdd = () => this.setState({ adding: !this.state.adding })

  render() {
    const { adding } = this.state
    return(
      <>
        <h1>Pokedex</h1>
        {
          adding ?
          <PokeForm toggleAdd={this.toggleAdd} />
          :
          // <button onClick={this.toggleAdd}>Add Pokemon</button>
          <Btn onClick={this.toggleAdd}>Add Pokemon</Btn>
        }
        <List pokemons={this.state.pokemons} />
      </>
    )
  }
}

const ConnectedPokedex = () => {
  return(
    <PokemonConsumer>
      { value =>(
        <Pokedex
          pokemons={value.pokemons}
        />
      )}
    </PokemonConsumer>
  )
}

export default ConnectedPokedex;