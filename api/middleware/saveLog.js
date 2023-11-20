const saveLog = (err, req, res, next) => {
  console.log('bi orloo')
  next()
}

module.exports = saveLog
