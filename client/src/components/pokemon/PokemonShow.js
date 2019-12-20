import React, { Component } from 'react';

class PokemonShow extends Component {

  render() {
    const { name, pokemon_type, moves, level, weight, height } = this.props.location.state
    return(
      <>
        <h1>{name}</h1>
        <p>Type:{pokemon_type}</p>
        <p>Moves:{moves}</p>
        <p>Level:{level}</p>
        <p>Weight:{weight}</p>
        <p>Height:{height}</p>
      </>
    )
  }
}

export default PokemonShow;