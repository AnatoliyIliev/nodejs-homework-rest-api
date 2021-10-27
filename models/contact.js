const { Schema, model } = require('mongoose')
const Joi = require('joi')

const phoneRegexp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      required: [true, 'Contact must have email'],
    },
    phone: {
      type: String,
      required: [true, 'Contact must have phone'],
      match: phoneRegexp
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
)

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  favorite: Joi.boolean()
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  joiSchema
}
