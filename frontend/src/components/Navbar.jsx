import React from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">Writely</NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
          <NavLink to="/create">Create Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

