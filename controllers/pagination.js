const { Contact } = require('../models')

const pagination = async (req, res) => {
  const { page = 1, limit = 10 } = req.query
  const skip = (page - 1) * limit
  const { _id } = req.user
  // const result = await Contact.find({}) // {} - это значит найти все
  const result = await Contact.find({ owner: _id },
    '_id name email phone favorite', { skip, limit: +limit }).populate('owner', 'email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

module.exports = pagination
