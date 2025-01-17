const express = require('express')
const { controllerWraper, validation, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { auth: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/register', validation(joiSchema), controllerWraper(ctrl.register))

router.post('/login', validation(joiSchema), controllerWraper(ctrl.login))

// если нет тела запроса
router.get('/logout', authenticate, validation(joiSchema), controllerWraper(ctrl.logout))
// если есть тело запроса
// router.post('/logout', ctrl.logout)

router.get('/current', authenticate, controllerWraper(ctrl.current))

module.exports = router
