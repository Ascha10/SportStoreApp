import React from 'react';
import { Link } from 'react-router-dom';


export default function SideBar() {
  return(
      <nav className='sideBar'>
          <Link to="/">Home</Link>
          <Link to="/Shirts">Shirts</Link>
          <Link to="/Pants">Pants</Link>
          <Link to="/Shoes">Shoes</Link>
          <Link to="/Contact">Contact</Link>
      </nav>
      
  )
}
