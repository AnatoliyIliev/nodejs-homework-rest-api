const { Contact } = require('../models')

const listContacts = async (req, res) => {
  // const result = await Contact.find({}) // {} - это значит найти все
  const result = await Contact.find({}, '_id name email phone favorite') // {} - это значит найти все и вывести только то что указано в перечне
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = listContacts
