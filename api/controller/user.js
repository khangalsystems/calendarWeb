const asyncHandler = require('express-async-handler')
const {Op}=require('sequelize')
const MyError=require('../utils/myError')
const dayjs = require('dayjs')
exports.login = asyncHandler(async (req, res) => {
  const user = await req.db.user.findOne({
      where:{
         phone:req.body.phone,
         notifToken:{
          [Op.ne]: req.body.notifToken
        }
       }
  })
  if(user) {
     throw new MyError('Утасны дугаар давхардаж байна !',500) 
    // res.status(500).json({
    //     success: false,
    //     data: {error:{message:'Утасны дугаар давхардаж байна !'}},
    //   })
  }
  else 
  {
      const user=await req.db.user.create(req.body)

      res.status(200).json({
        success: true,
        data: user,
      })
    }
})

exports.verifyCode = asyncHandler(async (req, res) => {
  const code = await req.db.code.findOne({
      where:{
         code:req.body.code
       }
  })
  if(!code) 
     throw new MyError('Тухайн код буруу байна!',500)  
  if(code && code.used==1) 
     throw new MyError('Тухайн код ашиглагдсан байна!',500)

      await code.update({
          userId:req.body.userId,
          usedDate:dayjs(),
          used:1
      })
      const user=await req.db.user.findByPk(req.body.userId)
      user.update({notifToken:req.body.expoToken})
      res.status(200).json({
        success: true,
        data: code,
      })
    
})
