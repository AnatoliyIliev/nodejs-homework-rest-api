const express = require('express')
const contactsOperation = require('../../model')
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperation.listContacts()
    res.json(contacts)
    // res.json({ message: 'template message' })
  } catch (error) {
    res.status(500).json({
      status: 'error',
      cade: 500,
      message: error.message
    })
  }
})

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
