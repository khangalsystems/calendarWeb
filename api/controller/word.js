const asyncHandler = require('express-async-handler')
const {Op}=require('sequelize')
exports.getWords = asyncHandler(async (req, res) => {
  const words = await req.db.word.findAll()
  res.status(200).json({
    success: true,
    data: words,
  })
})

exports.getWord = asyncHandler(async (req, res) => {
  const words = await req.db.word.findByPk(req.params.id)
    
  res.status(200).json({
    success: true,
    data: words,
  })
})

