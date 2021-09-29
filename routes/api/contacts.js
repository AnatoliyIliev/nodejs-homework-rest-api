const express = require('express')

const router = express.Router()

const { controllerWraper, validation } = require('../../middlewares')
const { productSchema } = require('../../shemas')
const { contacts: ctrl } = require('../../controllers')
// const contactsOperation = require('../../model')

router.get('/', controllerWraper(ctrl.listContacts))

router.get('/:contactId', controllerWraper(ctrl.getContactById))

router.post('/', validation(productSchema), controllerWraper(ctrl.addContact))

router.delete('/:contactId', controllerWraper(ctrl.removeContact))

router.patch('/:contactId', validation(productSchema), controllerWraper(ctrl.updateContact))

module.exports = router
