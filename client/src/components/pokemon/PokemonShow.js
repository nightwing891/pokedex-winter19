import React, { Component } from 'react';

class PokemonShow extends Component {

  render() {
    const { name, pokemon_type, moves, level, weight, height } = this.props.location.state
    return(
      <>
        <h1>{name}</h1>
      </>
    )
  }
}

export default PokemonShow;