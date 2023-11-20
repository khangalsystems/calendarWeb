const asyncHandler = require('express-async-handler')
const {Op}=require('sequelize')
exports.login = asyncHandler(async (req, res) => {
  const user = await req.db.user.findOne({
      where:{
         phone:req.body.phone
      }
  })
  if(user) {
     res.status(500).json({
        success: false,
        data: {error:{message:'Утасны дугаар давхардаж байна !'}},
      })
  }
  else 
  {

      res.status(200).json({
        success: true,
        data: [],
      })
    }
})


