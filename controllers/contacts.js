const { Contact } = require('../models')
// const createError = require('http-errors')
// ИЛИ
// const { NotFound, BadRequest } = require('http-errors')
const { NotFound } = require('http-errors')

const listContacts = async (req, res) => {
  // const result = await Contact.find({}) // {} - это значит найти все
  // const result = await Contact.find({}, '_id name email phone favorite') // {} - это значит найти все и вывести только то что указано в перечне
  const result = await Contact.find({})
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

const getContactById = async (req, res) => {
  const { contactId } = req.params
  // const contact = await Contact.findOne(contactId) // найдет только первый попавшийся
  const contact = await Contact.findById(contactId) // правельнее так, точный поиск по id
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
  const result = await Contact.findByIdAndDelete(contactId)
  if (!result) {
    throw new NotFound('Not found')
  }
  res.json({
    status: 'success',
    code: 200,
    messege: 'contact deleted'
  })
}

const addContact = async (req, res) => {
  // const { name, email, phone } = req.body
  // const result = await Contact.create(name, email, phone)
  const result = await Contact.create(req.body)
  // if (!result) {
  //   throw new NotFound('NotFound missing required name field')
  // }
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

const updateContact = async (req, res) => {
  // console.log(req.body)
  // console.log(req.params)
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true }) // findByIdAndUpdate - поиск и обновление по Id. Обновит, но вернет старое значение, { new: true } означает что вернет новый объект а не стары.
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
