import React from 'react';


import { Link } from 'react-router-dom';



function Nav() {
  return (
    <nav >
      <Link to='/'>
        <span >
          Bienvenido
        </span>
      </Link>
      <Link to='/Home'>
        Home
      </Link>
        
        
    </nav>
  );
};

export default Nav;
