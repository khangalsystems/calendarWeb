const MyError = require('../utils/myError')
//const MyError = require("../middleware/error");
const asyncHandler = require('express-async-handler')

module.exports = async function (model, logs) {
  //const wrk1 = await db.worker.findByPk(id);
  const wrk1 = await model.findByPk(id)
  console.log('id:')
  console.log('id:' + wrk1.id)
  //console.log("name:"+wrk1.name);
  const log = await req.db.logs.create({
    changedRowID: model.id,
    tableId: 1,
    actionType: 2,
    actionDate: '2022-08-10',
    WorkerId: 1,
    branchId: 1,
  })

  res.status(200).json({
    success: true,
    //magic:Object.keys(req.db.worker.prototype),
    data: log,
  })
  //return 123;
}
