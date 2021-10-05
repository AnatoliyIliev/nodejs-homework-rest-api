// const { v4 } = require('uuid')
const ubdate = require('./ubdate')

const listContacts = require('./listContacts')

const addContact = async(name, email, phone) => {
  const contacts = await listContacts()
  const newId = contacts[contacts.length - 1].id + 1
  const newContacts = { name, email, phone, id: newId }
  contacts.push(newContacts)
  // await fs.writeFile(contactsPath, JSON.stringify(contacts));
  await ubdate(contacts)
  return newContacts
}

module.exports = addContact
