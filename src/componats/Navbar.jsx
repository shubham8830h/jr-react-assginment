import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="links">
      {/* Navbar */}
      <Link className="f" to="/">
        Counter
      </Link>
      <Link className="s" to="/form">
        Login Form
      </Link>
      <Link className="t" to="/grid">
        Grid Items
      </Link>
    </div>
  );
}

export default Navbar