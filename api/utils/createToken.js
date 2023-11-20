const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = async (user) => {
  const token = jwt.sign(
    { id: user.id, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRESIN,
    }
  )
  return token
}
module.exports = createToken
