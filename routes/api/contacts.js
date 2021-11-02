const express = require('express')

const router = express.Router()

const { controllerWraper, validation, authorization } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

router.get('/', authorization, controllerWraper(ctrl.listContacts))

router.get('/', authorization, controllerWraper(ctrl.pagination)) // GET /contacts?page=1&limit=20

router.get('/:contactId', authorization, controllerWraper(ctrl.getContactById))

router.post('/', authorization, validation(joiSchema), controllerWraper(ctrl.addContact))

router.delete('/:contactId', authorization, controllerWraper(ctrl.removeContact))

router.patch('/:contactId', authorization, validation(joiSchema), controllerWraper(ctrl.updateContact))

router.patch('/:contactId/favorite', authorization, controllerWraper(ctrl.updateStatusContact))

module.exports = router
