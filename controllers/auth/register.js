const { Conflict } = require('http-errors')
const gravatar = require('gravatar')
const { nanoid } = require('nanoid')
// const bcrypt = require('bcryptjs')
const { User } = require('../../models')
const { sendEmail } = require('../../helpers')

const register = async(req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict('Email in use')
    // res.status(409).json({
    //   starus: 'error',
    //   code: 409,
    //   message: 'Email in use'
    // })
    // return;
  }

  const avatarURL = gravatar.url(email)
  const verifyToken = nanoid()
  const newUser = new User({ email, avatarURL, verifyToken })
  newUser.setPassword(password)
  await newUser.save()

  const mail = {
    to: email,
    subject: 'Подтверждение регистрации',
    html: `<a target='_blank' href='http://lacalhost:3000/api/users/verify/${verifyToken}'>Нажмите для подтверждения</a>`
  }
  sendEmail(mail)

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  // await User.create({ email, password: hashPassword })

  res.status(201).json({
    status: 'success',
    code: 201,
    messege: 'Register success',
    data: {
      user: {
        email,
        subscription: newUser.subscription
      }
    }
  })
}
module.exports = register
