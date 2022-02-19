import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthProvider/AuthProvider';
import { navBarStyle } from '../../../Context/ThemeProvider/ThemeCSS';
import { themeContext } from '../../../Context/ThemeProvider/ThemeProvider';
import { useContext } from 'react';

export default function SideBar() {

  const {theme} = useContext(themeContext);
  const auth = useAuth();

  return(
      <nav className='sideBar' style={theme === 'light' ? navBarStyle.light : navBarStyle.dark}>
          <Link to="/">Home</Link>
          <Link to="/Shirts">Shirts</Link>
          <Link to="/Pants">Pants</Link>
          <Link to="/Shoes">Shoes</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Profile">Profile</Link>
          {
            !auth.user && (<Link to="/Login">Login</Link>)
          }
      </nav>
      
  )
}
