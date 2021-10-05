const express = require('express')

const router = express.Router()

const { controllerWraper, validation } = require('../../middlewares')
const { contactSchema } = require('../../shemas')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWraper(ctrl.listContacts))

router.get('/:contactId', controllerWraper(ctrl.getContactById))

router.post('/', validation(contactSchema), controllerWraper(ctrl.addContact))

router.delete('/:contactId', controllerWraper(ctrl.removeContact))

router.patch('/:contactId', validation(contactSchema), controllerWraper(ctrl.updateContact))

module.exports = router
