const ubdate = require('./ubdate')
const listContacts = require('./listContacts')

const updateContact = async(id, body) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === Number(id))
  console.log(idx)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...contacts[idx], ...body }
  await ubdate(contacts)
  return contacts[idx]
}

module.exports = updateContact
