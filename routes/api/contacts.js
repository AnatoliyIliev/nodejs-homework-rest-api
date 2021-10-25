const express = require('express')

const router = express.Router()

const { controllerWraper, validation } = require('../../middlewares')
const { joiShema } = require('../../models/contact')
const { contacts: ctrl } = require('../../controllers')

// router.get('/', controllerWraper(ctrl.listContacts))

// router.get('/:contactId', controllerWraper(ctrl.getContactById))

router.post('/', validation(joiShema), controllerWraper(ctrl.addContact))

// router.delete('/:contactId', controllerWraper(ctrl.removeContact))

// router.patch('/:contactId', validation(joiShema), controllerWraper(ctrl.updateContact))

module.exports = router
