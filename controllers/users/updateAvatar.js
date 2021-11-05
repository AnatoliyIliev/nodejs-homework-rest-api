const { User } = require('../../models')
const path = require('path')
const fs = require('fs/promises')

const updateAvatar = async(req, res, next) => {
  const { _id } = req.user
  const { path: tempDir, originalName } = req.file
  const [extention] = originalName.split('.').reverse()
  const filename = `${_id}.${extention}`
  const uploadDir = path.join(__dirname, '../../', 'public\\avatars', filename)
  try {
    await fs.rename(tempDir, uploadDir)
    const image = path.join('avatars', filename)
    await User.findByIdAndUpdate(_id, { avatarUrl: image })
    res.json({
      status: 'success',
      code: 201,
      message: 'Update avatar success'
    })
  } catch (error) {
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = updateAvatar
