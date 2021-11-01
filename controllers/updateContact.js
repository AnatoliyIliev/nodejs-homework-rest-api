const { Contact } = require('../models')
// const createError = require('http-errors')
// ИЛИ
// const { NotFound, BadRequest } = require('http-errors')
const { NotFound } = require('http-errors')

const updateContact = async (req, res) => {
  // console.log(req.body)
  // console.log(req.params)
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true }) // findByIdAndUpdate - поиск и обновление по Id. Обновит, но вернет старое значение, { new: true } означает что вернет новый объект а не стары.
  if (!result) {
    throw new NotFound(404, `Contact with id=${contactId} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'file was updated',
    data: {
      result
    }
  })
}

module.exports = updateContact
