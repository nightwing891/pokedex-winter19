import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PokeForm extends Component {
  state = { 
    name: '', 
    pokemon_type: '', 
    level: 1, 
    moves: '', 
    weight: '', 
    height: '' 
  }

  componentDidMount() {
    if (this.props.id) {
      const { name, pokemon_type, level, moves, weight, height } = this.props
      this.setState({ name, pokemon_type, level, moves, weight, height })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updatePokemon( this.props.id, this.state )
      this.props.toggleEdit()
    } else {
      this.props.addPokemon(this.state)
      this.props.toggleAdd()
    }
    this.setState({ 
      name: '', 
      pokemon_type: '', 
      level: 1, 
      moves: '', 
      weight: '', 
      height: '' 
    })
  }


  render() {
    const { name, pokemon_type, moves, weight, height} = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Name'
        />
        <Form.Input
          name='pokemon_type'
          value={pokemon_type}
          onChange={this.handleChange}
          label='Type'
        />
        <Form.Input
          name='moves'
          value={moves}
          onChange={this.handleChange}
          label='Moves'
        />
        <Form.Input
          name='height'
          value={height}
          onChange={this.handleChange}
          label='Height'
        />
        <Form.Input
          name='weight'
          value={weight}
          onChange={this.handleChange}
          label='Weight'
        />
        <button type='submit'>Submit</button>
      </Form>
    )
  }
}

export default PokeForm;