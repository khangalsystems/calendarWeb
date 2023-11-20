const express = require('express')
const dotenv = require('dotenv')
// var fs=require("fs");
// var path=require("path");
const errorHandler = require('./middleware/error')
const jwt_decode = require('jwt-decode')
//var morgan=require("morgan");
var rfs = require('rotating-file-stream')
const injectDb = require('./middleware/injectDb') //db g request dotor nemeh
const fileUpload = require('express-fileupload')
//route oruulj ireh

const wordRoutes = require('./routes/word')

//appiin tohirgoo process.env rvv achaalah
dotenv.config({ path: './config/config.env' })
const db = require('./config/db-mysql')
const cors = require('cors')

var cookieParser = require('cookie-parser')
const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}));
app.use(fileUpload())
app.use(injectDb(db)) //ene murnuus doosho bvgded db -g request er ugnu
app.use('/api/v1/word', wordRoutes)
app.use(errorHandler)
// .sync({force:true}) bol mysql deeres bvh table utsgaad modeliin dagyy shiner uusgene
db.sequelize
  .sync()
  .then(async (result) => {
    console.log('sync hiigdlee...')
  })
  .catch((err) => console.log(err))
const server=app.listen(
  process.env.PORT,
  console.log(`hello express server ${process.env.PORT} portdeer aslaa`)
)
server.timeout = 1000 * 60 * 1000;