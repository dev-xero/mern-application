import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { FaSignInAlt, FaChevronRight } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  )

  const handleChange = ev => {
    setFormData(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const handleSubmit = ev => {
    ev.preventDefault()
    const userData = {
      email,
      password
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          &nbsp; Login
        </h1>
        <p>Log in to your account to continue</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Email */}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Your email address"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="form-group">
            {/* Password */}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Your password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              LOG IN <FaChevronRight />
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
