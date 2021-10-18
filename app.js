const mongoose = require('mongoose')
require('dotenv').config()

const { NAME } = process.env
const { PASSWORD } = process.env

const DB_HOST = `mongodb+srv://${NAME}:${PASSWORD}@cluster0.ugw2z.mongodb.net/db-contacts?retryWrites=true&w=majority`
// console.log(DB_HOST)
const { Schema, model } = mongoose

const productSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
})

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connection successful')
}).catch(error => {
  console.log(error.message)
})
