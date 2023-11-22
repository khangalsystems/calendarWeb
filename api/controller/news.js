const asyncHandler = require('express-async-handler')
const {Op}=require('sequelize')
const MyError=require('../utils/myError')
const dayjs = require('dayjs')
exports.getNews = asyncHandler(async (req, res) => {
  const news = await req.db.news.findAll()
  
      res.status(200).json({
        success: true,
        data: news,
      })
})
exports.getNewsImage = asyncHandler(async (req, res) => {
     const fileName = req.params.name
    const directoryPath = './public/image/'
    res.download(directoryPath + fileName, fileName, (err) => {
      if(err) {
        // Check if headers have been sent
        if(res.headersSent) {
          // You may want to log something here or do something else
        } else {
          return res.sendStatus(404); // 404, maybe 500 depending on err
        }
      }
    })
})
