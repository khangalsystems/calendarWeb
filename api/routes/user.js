const express = require('express')
const { login,verifyCode } = require('../controller/user')

const router = express.Router()
// /api/v1/action
router.route('/login').post(login)
router.route('/verify').post(verifyCode)
module.exports = router
