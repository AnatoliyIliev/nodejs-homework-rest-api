const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContact = require('./updateContact')
const updateStatusContact = require('./updateStatusContact')

const auth = require('./auth')
const users = require('./users')

module.exports = {
  users,
  auth,
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
}
