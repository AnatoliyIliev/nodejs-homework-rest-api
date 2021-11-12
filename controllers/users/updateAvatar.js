const { User } = require('../../models')
const path = require('path')
const fs = require('fs/promises')
const Jimp = require('jimp')

const updateAvatar = async(req, res, next) => {
  // console.log(req)
  const { _id } = req.user
  const { path: tempDir, originalName } = req.file
  const [extention] = originalName.split('.').reverse()

  await Jimp.read(tempDir)
    .then(avatar => {
      return avatar
        .resize(256, 256) // resize
        .greyscale() // set greyscale
        .write(tempDir) // save
    })
    .catch(err => {
      console.error(err)
    })

  const filename = `${_id}.${extention}`
  const uploadDir = path.join(__dirname, '../../', 'public\\avatars', filename)

  try {
    await fs.rename(tempDir, uploadDir)
    const image = path.join('avatars', filename)
    await User.findByIdAndUpdate(_id, { avatarUrl: image })
    res.json({
      status: 'success',
      code: 200,
      message: 'Update avatar success',
      data: {
        image,
      }
    })
  } catch (error) {
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = updateAvatar
