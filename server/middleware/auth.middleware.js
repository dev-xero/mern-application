const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

const protect = asyncHandler(async (req, res, next) => {
  let token = null
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(' ')[1]
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // get user from token
      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (err) {
      console.log(err)
      res.status(401)
      throw new Error('Not Authorized')
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not Authorized, token is absent')
  }
})

module.exports = protect
