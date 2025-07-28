// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">GymStore</Link>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
