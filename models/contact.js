const { Shema, model } = require('mongoose')
const Joi = require('joi')

const contactShema = Shema(
  {
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
  }
)

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
})

const Contact = model('contact', contactShema)

module.exports = {
  Contact,
  joiSchema
}
