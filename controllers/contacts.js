const contactsOperation = require('../model')
// const createError = require('http-errors')
// ИЛИ
// const { NotFound, BadRequest } = require('http-errors')
const { NotFound } = require('http-errors')

const listContacts = async (req, res, next) => {
  const contacts = await contactsOperation.listContacts()
  res.json(contacts)
}

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const contact = await contactsOperation.getContactById(contactId)
  if (!contact) {
    throw new NotFound('Not found')
    // ИЛИ
    // throw new createError(404, `Contact with id=${contactId} not found`)
    // ИЛИ
    // const error = new Error(`Contact with id=${contactId} not found`)
    // error.status = 404
    // throw error
  }
  res.json(contact)
}

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperation.removeContact(contactId)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    messege: 'contact deleted'
  })
}

const addContact = async (req, res, next) => {
  const { name, email, phone } = req.body
  const result = await contactsOperation.addContact(name, email, phone)
  if (!result) {
    throw new NotFound('NotFound missing required name field')
  }
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

const updateContact = async (req, res, next) => {
  console.log(req.body)
  console.log(req.params)
  const { contactId } = req.params
  const result = await contactsOperation.updateContact(contactId, req.body)

  if (!result) {
    throw new NotFound('Not found')
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
