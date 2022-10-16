const express = require('express')
const router = express.Router()
const {
  get_goals,
  post_goals,
  put_goals,
  delete_goals,
} = require('../controllers/goal.controller')
const protect = require('../middleware/auth.middleware')

router.route('/').get(protect, get_goals).post(protect, post_goals)
router.route('/:id').put(protect, put_goals).delete(protect, delete_goals)

module.exports = router
