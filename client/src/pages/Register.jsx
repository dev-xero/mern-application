import React, { useState } from 'react'
import { FaUser, FaChevronRight } from 'react-icons/fa'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = formData

	const handleChange = (ev) => {
		setFormData(prevState => ({
			...prevState,
			[ev.target.name]: ev.target.value
		}))
	}
	
	const handleSubmit = (ev) => {
		ev.preventDefault()
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
              id="confirm-password"
              name="confirm-password"
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
