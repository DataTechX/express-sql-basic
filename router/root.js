const express = require('express')
const router = express.Router()

// router 
require('./apiPost')(router)

module.exports = router