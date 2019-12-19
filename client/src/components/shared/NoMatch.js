import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <>
    <h1>404 page not found</h1>
    <Link to='/'>
      Go Home
    </Link>
  </>
)

export default NoMatch;