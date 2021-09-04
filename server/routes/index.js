const express = require('express')
const router = express.Router()

router.use('/api', require('./api/index'))

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({'message': 'Hello World'}).status(200)
})

module.exports = router
