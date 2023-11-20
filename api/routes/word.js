const express = require('express')
const { getWords,getWord } = require('../controller/word')
const router = express.Router()
// /api/v1/action
router.route('/').get(getWords)
router.route('/:id').get(getWord)
module.exports = router
