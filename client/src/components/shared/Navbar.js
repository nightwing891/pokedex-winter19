import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <Link to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to='/about'>
      <Menu.Item>
        About
      </Menu.Item>
    </Link>
    <Link to='/Pokedex'>
      <Menu.Item>
        <Icon name='heartbeat' color='red'/>
        Pokedex
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar