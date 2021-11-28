const { NotFound } = require('http-errors')
const { User } = require('../../models')

const verify = async(req, res, next) => {
  const { verificationToken } = req.params
  const user = await User.findOne({ verifyToken: verificationToken })
  if (!user || user.verify) {
  // if (!user) {
    throw NotFound()
  }
  try {
    await User.findByIdAndUpdate(user._id, { verify: true, verifyToken: null })

    res.json({
      status: 'success',
      code: 200,
      message: 'Email success verify'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = verify
