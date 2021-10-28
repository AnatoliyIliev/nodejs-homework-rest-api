const { Schema, model } = require('mongoose')
const Joi = require('joi')
const bcrypt = require('bcryptjs')

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlenght: 6
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter'
    },
    token: {
      type: String,
      default: null,
    },
    // owner: {
    //   type: SchemaTypes.ObjectId,
    //   ref: 'user',
    // },
  },
  { versionKey: false, timestamps: true }
)

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSunc(password, bcrypt.genSaltSync(10))
}

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(6).required(),

})

const User = model('user', userSchema)

module.exports = {
  User,
  joiSchema
}
