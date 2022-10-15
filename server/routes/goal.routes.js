const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'GET Goals' })
})

router.post('/', (req, res) => {
  res.status(200).json({ msg: 'POST Goals' })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json({ msg: `UPDATE Goals ${id}` })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.status(200).json({ msg: `Delete Goals ${id}` })
})

module.exports = router
