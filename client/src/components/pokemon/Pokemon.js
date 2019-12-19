import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Pokemon = ({ id, name, pokemon_type, moves, level, weight, height }) => (
  <Table.Row>
    <Table.Cell>
      <Link 
        to={{
          pathname: `/pokemon/${id}`,
          state: { id, name, pokemon_type, moves, level, weight, height }
        }}>
        {name}
      </Link>
    </Table.Cell>
    <Table.Cell>{pokemon_type}</Table.Cell>
    <Table.Cell>{level}</Table.Cell>
    <Table.Cell>{moves}</Table.Cell>
    <Table.Cell>{weight}</Table.Cell>
    <Table.Cell>{height}</Table.Cell>
  </Table.Row>
)

export default Pokemon;