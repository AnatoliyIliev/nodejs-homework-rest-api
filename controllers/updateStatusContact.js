const { Contact } = require('../models')
// const createError = require('http-errors')
// ИЛИ
// const { NotFound, BadRequest } = require('http-errors')
const { NotFound } = require('http-errors')

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params
  const { body } = req.body

  const result = await Contact.findByIdAndUpdate(contactId, { body }, { new: true })
  if (!result) {
    throw new NotFound(404, 'Missing field favorite')
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'File was updated',
    data: {
      result
    }
  })
}

module.exports = updateStatusContact
