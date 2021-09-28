const { v4 } = require('uuid')
const ubdate = require('./ubdate')

const listContacts = require('./listContacts')

const addContact = async(name, email, phone) => {
  const contacts = await listContacts()
  const newContacts = { name, email, phone, id: v4() }
  contacts.push(newContacts)
  // await fs.writeFile(contactsPath, JSON.stringify(contacts));
  await ubdate(contacts)
  return newContacts
}

module.exports = addContact
