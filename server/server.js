const express = require('express')
const dotenv = require('dotenv').config()
const { error_handler } = require('./middleware/error.middleware')

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Welcome to the API' })
})

app.use('/api/goals', require('./routes/goal.routes'))
app.use(error_handler)

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})
