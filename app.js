
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const multer = require('multer')
const path = require('path')
const fs = require('fs/promises')

const authRouter = require('./routes/api/auth')
const contactsRouter = require('./routes/api/contacts')

const app = express()

const tempDir = path.join(__dirname, 'temp')

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 2048
  }
})
const upload = multer({
  starage: uploadConfig
})

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/contacts', contactsRouter)

app.patch('/users/avatars', upload.single('avatar'), async(req, res) => {
  const { path: tempDir, originalname } = req.file
  const uploadDir = path.join(__dirname, 'public\\avatars', originalname)
  await fs.rename(tempDir, uploadDir)
})

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  // если явно не указан статус ошибки то будет 500, если указан то будет то что указали.
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
