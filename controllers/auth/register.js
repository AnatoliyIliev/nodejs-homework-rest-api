const { Conflict } = require('http-errors')
// const bcrypt = require('bcryptjs')
const { User } = require('../../models')

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(409, 'Email in use')
    // res.status(409).json({
    //   starus: 'error',
    //   code: 409,
    //   message: 'Email in use'
    // })
    // return;
  }
  const newUser = new User({ email })
  newUser.setPassword(password)
  await newUser.save()
  //   const hashPassword = bcrypt.hashSunc(password, bcrypt.genSaltSync(10))
  //   await User.create({ email, password: hashPassword })

  res.status(201).json({
    status: 'success',
    cose: 201,
    messege: 'Register success',
    // data: {
    //   token
    // }
  })
}
module.exports = register
