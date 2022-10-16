import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      <ul>
        {user ? (
          <>
            <li>Welcome back, {`${user.name}`}!</li>
            <li>
              <button className="btn logout-btn" onClick={handleLogout}>
                Log out &nbsp;
                <FaSignOutAlt />
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
              <FaSignInAlt />
            </li>
            <li>
              <Link to="/register">Register</Link>
              <FaUser />
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
