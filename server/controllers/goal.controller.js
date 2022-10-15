const get_goals = (req, res) => {
	res.status(200).json({ msg: 'GET Goals' })
}

const post_goals = (req, res) => {
	res.status(200).json({ msg: 'POST Goals' })
}

const put_goals = (req, res) => {
	const { id } = req.params
  res.status(200).json({ msg: `UPDATE Goals ${id}` })
}

const delete_goals = (req, res) => {
	const { id } = req.params
  res.status(200).json({ msg: `Delete Goals ${id}` })
}

module.exports = {
  get_goals,
	post_goals,
	put_goals,
	delete_goals
}