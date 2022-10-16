import React, { useState } from 'react'
import { FaSignInAlt, FaChevronRight } from 'react-icons/fa'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleChange = ev => {
    setFormData(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }))
  }

  const handleSubmit = ev => {
    ev.preventDefault()
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
