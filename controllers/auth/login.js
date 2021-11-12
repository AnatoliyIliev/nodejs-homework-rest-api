const { Unauthorized } = require('http-errors')
const jwt = require('jsonwebtoken')

// const bcrypt = require('bcryptjs')
const { User } = require('../../models')

const { SECRET_KEY } = process.env

const login = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new Unauthorized('Wrong email or password, or email not verify')
  }
  //   if (!user) {
  //     throw new Unauthorized('Email or password is wrong')
  //   }

  //   if (!user.comparePassword(password)) {
  //     throw new Unauthorized('Password wrong')
  //   }

  //   const isCorectPassword = bcrypt.compareSync(password, user.password)
  //   if (!isCorectPassword) {
  //     throw new Unauthorized('Password wrong')
  //   }
  const payload = {
    id: user._id
  }
  const token = jwt.sign(payload, SECRET_KEY)

  await User.findByIdAndUpdate(user._id, { token })

  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription
      }
    }
  })
}
module.exports = login
