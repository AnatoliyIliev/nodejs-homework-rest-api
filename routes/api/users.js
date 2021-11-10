const express = require('express')
const { controllerWraper, authenticate, upload } = require('../../middlewares')
// const { joiSchema } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.patch('/avatars', authenticate, upload.single('avatar'), controllerWraper(ctrl.updateAvatar))

module.exports = router
