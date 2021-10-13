const mongoose = require('mongoose')
require('dotenv').config()

const { NAME } = process.env
const { PASSWORD } = process.env

const DB_HOST = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.ugw2z.mongodb.net/db-contacts?retryWrites=true&w=majority`

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful')
}).catch(error => {
  console.log(error.message)
})
