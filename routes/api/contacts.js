const express = require('express')

const router = express.Router()

const { controllerWraper, validation, authenticate } = require('../../middlewares')
const { joiSchema } = require('../../models/contact')
const ctrl = require('../../controllers')

router.get('/', authenticate, controllerWraper(ctrl.listContacts))

// router.get('/', authorization, controllerWraper(ctrl.pagination)) // GET /contacts?page=1&limit=20

router.get('/:contactId', authenticate, controllerWraper(ctrl.getContactById))

router.post('/', authenticate, validation(joiSchema), controllerWraper(ctrl.addContact))

router.delete('/:contactId', authenticate, controllerWraper(ctrl.removeContact))

router.patch('/:contactId', authenticate, validation(joiSchema), controllerWraper(ctrl.updateContact))

router.patch('/:contactId/favorite', authenticate, controllerWraper(ctrl.updateStatusContact))

module.exports = router
