const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => res.json({"message": "Hello from API test"}))

module.exports = router