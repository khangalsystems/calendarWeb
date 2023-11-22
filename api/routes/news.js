const express = require('express')
const { getNews, getNewsImage } = require('../controller/news')

const router = express.Router()
// /api/v1/action
router.route('/').get(getNews)
router.route('/:name').get(getNewsImage)

module.exports = router
