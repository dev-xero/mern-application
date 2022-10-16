const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

/**
 * @desc Create **a new user**
 * @route **POST** /api/users
 * @access **PUBLIC**
 * @param {*} req
 * @param {*} res
 */
const register_user = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please fill all fields')
  }

  // Check if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
			email: user.email,
			token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

/**
 * @desc Authenticate **a user**
 * @route **POST** /api/login
 * @access **PUBLIC**
 * @param {*} req
 * @param {*} res
 */
const login_user = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('user does not exist')
  } else if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid login data')
  }
  res.json({ msg: 'Authenticate User' })
})

/**
 * @desc Get **user data**
 * @route **POST** /api/users/me
 * @access **PRIVATE**
 * @param {*} req
 * @param {*} res
 */
const get_user_data = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id)
	res.status(200).json({
		id: _id,
		name,
		email
	})
})

// Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

module.exports = {
  register_user,
  login_user,
  get_user_data,
}
