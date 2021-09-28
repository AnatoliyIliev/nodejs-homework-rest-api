
const express = require('express')

const router = express.Router()

const { controllerWraper } = require('../../middlewares')
const { contacts: ctrl } = require('../../controllers')

router.get('/', controllerWraper(ctrl.listContacts))

router.get('/:contactId', controllerWraper(ctrl.getContactById))

router.post('/', controllerWraper(ctrl.addContact))

router.delete('/:contactId', controllerWraper(ctrl.removeContact))

router.patch('/:contactId', controllerWraper(ctrl.updateContact))

module.exports = router
