import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import { FaUser, FaChevronRight } from 'react-icons/fa'
import Spinner from '../components/Spinner'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

	const handleChange = (ev) => {
		setFormData(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
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
	
	const handleSubmit = (ev) => {
    ev.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }
  
  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          &nbsp; Create Your Account
        </h1>
        <p>Create an account to continue</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Username */}
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Your username"
              onChange={handleChange}
              value={name}
            />
          </div>
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
            {/* Confirm Password */}
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="off"
              autoCorrect="off"
              placeholder="Confirm your password"
              onChange={handleChange}
              value={confirmPassword}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              SIGN UP <FaChevronRight />
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
