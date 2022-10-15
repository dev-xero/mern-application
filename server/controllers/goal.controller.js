const asyncHandler = require('express-async-handler')

/**
 * @desc Get **all user** goals
 * @route **GET** /api/goals
 * @access **PRIVATE**
 * @param {*} req 
 * @param {*} res 
 */
const get_goals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'GET Goals' })
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
  res.status(200).json({ msg: 'POST Goals' })
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
  res.status(200).json({ msg: `UPDATE Goals ${id}` })
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
  res.status(200).json({ msg: `Delete Goals ${id}` })
})

module.exports = {
  get_goals,
	post_goals,
	put_goals,
	delete_goals
}