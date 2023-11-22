const Sequelize = require('sequelize')
//require('sequelize-hierarchy')(Sequelize);
var db = {}

const sequelize = new Sequelize(
  process.env.SEQUELIZE_DATABASE,
  process.env.SEQUELIZE_USER,
  process.env.SEQUELIZE_USER_PASSWORD,
  {
    retry: {
      match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
      ],
      max: 6,
    },
    host: process.env.SEQUELIZE_HOST,
    port: process.env.SEQUELIZE_PORT,
    dialect: process.env.SEQUELIZE_DIALECT,
    define: {
      freezeTableName: true, // table iin nereer uusgene auto ner uusgehgui
    },
    pool: {
      max: 22, // ihdee 10 connect uusgene
      min: 0,
      acquire: 120000, //holbogdohgui bol 60 s huleene
      idle: 70000, //10 s idevhgui bol connectiig tsutslana
    },
    logging:false,
    operatorAliases: false, //sql injectio hamgaalalt
  }
)
const models = [
  require('../models/word'),
  require('../models/user'),
  require('../models/code'),
  require('../models/info'),
  require('../models/news'),

]
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize)
  db[seqModel.name] = seqModel
})
db.sequelize = sequelize
module.exports = db
//sequelize-auto -h 43.231.113.13 -d esukh -u khangal -x Khangal@123 -p 3306 --dialect mysql -a sequelize-auto-settings.json -o sequelize
