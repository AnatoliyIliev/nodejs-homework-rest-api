const { v4 } = require('uuid')
const ubdateContacts = require('./ubdateContacts')

const listContacts = require('./listContacts')

const addContact = async(name, email, phone) => {
  const contacts = await listContacts()
  const newContacts = { name, email, phone, id: v4() }
  contacts.push(newContacts)
  // await fs.writeFile(contactsPath, JSON.stringify(contacts));
  await ubdateContacts(contacts)
  return newContacts
}

module.exports = addContact
