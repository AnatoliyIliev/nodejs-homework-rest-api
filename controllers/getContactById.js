const { Contact } = require('../models')
// const createError = require('http-errors')
// ИЛИ
// const { NotFound, BadRequest } = require('http-errors')
const { NotFound } = require('http-errors')

const getContactById = async (req, res) => {
  const { contactId } = req.params
  // const contact = await Contact.findOne(contactId) // найдет только первый попавшийся
  const result = await Contact.findById(contactId, '_id name email phone favorite') // правельнее так, точный поиск по id
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: { result }
  })
}

module.exports = getContactById
