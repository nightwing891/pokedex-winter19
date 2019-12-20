import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Pokemon = ({ id, name, pokemon_type, moves, level, weight, height, releasePokemon, updatePokemon }) => (
  <Table.Row>
    <Table.Cell>
      <Link 
        to={{
          pathname: `/pokemon/${id}`,
          state: { id, name, pokemon_type, moves, level, weight, height }
        }}
        >
        {name}
      </Link>
    </Table.Cell>
    <Table.Cell>{pokemon_type}</Table.Cell>
    <Table.Cell>{level}</Table.Cell>
    <Table.Cell>{moves}</Table.Cell>
    <Table.Cell>{weight}</Table.Cell>
    <Table.Cell>{height}</Table.Cell>
    <Table.Cell>
      <Button color='red' onClick={ () => releasePokemon(id) }>
        <Icon name='tree' />
      </Button>
    </Table.Cell>
  </Table.Row>
)

export default Pokemon;