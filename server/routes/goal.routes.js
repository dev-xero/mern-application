const express = require('express')
const {
  get_goals,
  post_goals,
  put_goals,
  delete_goals,
} = require('../controllers/goal.controller')
const router = express.Router()

router.get('/', get_goals)
router.post('/', post_goals)
router.put('/:id', put_goals)
router.delete('/:id', delete_goals)

module.exports = router
