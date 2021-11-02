const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContact = require('./updateContact')
const updateStatusContact = require('./updateStatusContact')
const pagination = require('./pagination')

const auth = require('./auth')

module.exports = {
  auth,
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
  pagination
}
