import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const navigation = props => {
  return (
    <ul className='Navigation'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/T4B3f719sY'>Random</Link>
      </li>
    </ul>
  );
}

export default navigation;