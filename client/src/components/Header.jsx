import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
          <FaSignInAlt />
        </li>
        <li>
          <Link to="/register">Register</Link>
          <FaUser />
        </li>
      </ul>
    </header>
  )
}

export default Header
