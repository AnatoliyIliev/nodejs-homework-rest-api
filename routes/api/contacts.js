const express = require('express')

const router = express.Router()

const { controllerWraper, validation } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWraper(ctrl.listContacts))

router.get('/:contactId', controllerWraper(ctrl.getContactById))

router.post('/', validation(joiSchema), controllerWraper(ctrl.addContact))

router.delete('/:contactId', controllerWraper(ctrl.removeContact))

router.patch('/:contactId', validation(joiSchema), controllerWraper(ctrl.updateContact))

router.patch('/:contactId/favorite', controllerWraper(ctrl.updateStatusContact))

module.exports = router
