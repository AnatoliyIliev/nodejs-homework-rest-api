const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, 'contacts.json')

const listContacts = async() => {
  const data = await fs.readFile(contactsPath)
  const contacts = JSON.parse(data)
  return contacts
}

// Лучший метод
//   const contactsPath = require("./contacts.json");
//   const listContacts = async() => contactsPath;

module.exports = listContacts
