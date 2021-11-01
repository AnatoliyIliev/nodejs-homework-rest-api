const express = require('exspress')
const { controllerWraper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models/user')
const { auth: ctrl } = require('../../controllers')

const router = express.Router()

router.post('/signup', validation(joiSchema), controllerWraper(ctrl.register))

router.post('/login', validation(joiSchema), controllerWraper(ctrl.login))

router.get('/logout', validation(joiSchema), controllerWraper(ctrl.logout)) // если нет тела запроса
// router.post('/logout', ctrl.logout)   //если есть тело запроса

module.exports = router