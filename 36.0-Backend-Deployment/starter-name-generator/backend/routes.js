const express = require('express')
const generator = require('./generator')
const router = express.Router()
const cors = require('cors')

router.get('/', cors(), (req, res) => {
  res.json({ message: 'Name Generator App' });
})

router.get('/generate', cors(), (req, res) => {
  res.json(generator());
})

module.exports = router
