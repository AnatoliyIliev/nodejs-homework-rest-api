const mongoose = require('mongoose')
require('dotenv').config()

const app = require('../app')
// http://localhost:3000/api/contacts
const { NAME } = process.env
const { PASSWORD } = process.env
const { PORT = 3000 } = process.env

const DB_HOST = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.ugw2z.mongodb.net/db-contacts?retryWrites=true&w=majority`

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(PORT)
  console.log('Database connection successful')
}).catch(error => {
  console.log(error.message)
  process.exit(1)
})
