const express = require('express')
const router = express.Router()
const {
  get_goals,
  post_goals,
  put_goals,
  delete_goals,
} = require('../controllers/goal.controller')

router.route('/').get(get_goals).post(post_goals)
router.route('/:id').put(put_goals).delete(delete_goals)

module.exports = router
