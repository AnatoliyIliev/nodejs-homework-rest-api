const { Contact } = require('../models')

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
    message: 'Contact was added',
    data: {
      result
    }
  })
}

module.exports = addContact
