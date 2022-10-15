/**
 * @desc Create **a new user**
 * @route **POST** /api/users
 * @access **PUBLIC**
 * @param {*} req
 * @param {*} res
 */
const register_user = (req, res) => {
  res.json({ msg: 'Register User' })
}

/**
 * @desc Authenticate **a user**
 * @route **POST** /api/login
 * @access **PUBLIC**
 * @param {*} req
 * @param {*} res
 */
const login_user = (req, res) => {
  res.json({ msg: 'Authenticate User' })
}

/**
 * @desc Get **user data**
 * @route **POST** /api/users/me
 * @access **PUBLIC**
 * @param {*} req
 * @param {*} res
 */
const get_user_data = (req, res) => {
  res.json({ msg: 'User data' })
}

module.exports = {
	register_user,
	login_user,
	get_user_data
}
