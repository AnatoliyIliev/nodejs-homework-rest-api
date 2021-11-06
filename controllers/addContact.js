const { Contact } = require('../models')

const addContact = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id }
  const result = await Contact.create(newContact)
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
