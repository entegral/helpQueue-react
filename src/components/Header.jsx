import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
function Header(){
  


  const compoonentStyle = {
    overflow: 'hidden'
  };

  const imgStyle = {
    height: '40px',
    float: 'left'
  };
  
  const ulStyle = {
    float: 'right'
  };
  
  const linkStyle = {
    display: 'inline',
    textDecoration: 'none',
    color: 'black',
    marginRight: 5
  };

  return (
    <div style={compoonentStyle}>
      <img style={imgStyle} src={logo} alt=""/>
      <ul style={ulStyle}>
        <Link style={linkStyle} to="/">Home |</Link>
        <Link style={linkStyle} to="/">About |</Link>
        <Link style={linkStyle} to="/">Sign Up |</Link>
        <Link style={linkStyle} to="/">Login</Link>
      </ul>
    </div>
  );
}

export default Header;