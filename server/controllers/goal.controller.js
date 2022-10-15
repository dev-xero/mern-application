const asyncHandler = require('express-async-handler')
const Goal = require('../models/goal.model')

/**
 * @desc Get **all user** goals
 * @route **GET** /api/goals
 * @access **PRIVATE**
 * @param {*} req
 * @param {*} res
 */
const get_goals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

/**
 * @desc Create **a new user** goal
 * @route **POST** /api/goals
 * @access **PRIVATE**
 * @param {*} req
 * @param {*} res
 */
const post_goals = asyncHandler(async (req, res) => {
  const { text } = req.body
  if (!text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  const goal = await Goal.create({
    text: text,
  })
  res.status(200).json(goal)
})

/**
 * @desc Update **an existing user** goal
 * @route **PUT** /api/goals/:id
 * @access **PRIVATE**
 * @param {*} req
 * @param {*} res
 */
const put_goals = asyncHandler(async (req, res) => {
  const { id } = req.params
  const goal = await Goal.findById(id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal Not Found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(updatedGoal)
})

/**
 * @desc Delete **a specific user** goal
 * @route **DELETE** /api/goals/:id
 * @access **PRIVATE**
 * @param {*} req
 * @param {*} res
 */
const delete_goals = asyncHandler(async (req, res) => {
  const { id } = req.params
  const goal = await Goal.findById(id)
  if (!goal) {
    res.status(400)
    throw new Error('Cannot Delete That Goal')
  }
  await goal.remove()
  res.status(200).json({ id: `${id}` })
})

module.exports = {
  get_goals,
  post_goals,
  put_goals,
  delete_goals,
}
