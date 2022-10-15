const express = require('express')
const router = express.Router()
const {
  register_user,
  login_user,
  get_user_data,
} = require('../controllers/user.controller')

router.post('/', register_user)
router.post('/login', login_user)
router.get('/me', get_user_data)

module.exports = router
