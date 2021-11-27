const express = require('express')
const { controllerWraper, authenticate, upload } = require('../../middlewares')
// const { joiSchema } = require('../../models/user')
const { users: ctrl } = require('../../controllers')

const router = express.Router()

router.get('.verify/:verificationToken', controllerWraper(ctrl.verify))
router.post('/verify', controllerWraper(ctrl.reVerification))

router.patch('/avatars', authenticate, upload.single('avatar'), controllerWraper(ctrl.updateAvatar))

module.exports = router
