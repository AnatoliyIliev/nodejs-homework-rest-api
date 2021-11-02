const current = (req, res) => {
  const { user } = req
  res.status(200).json({
    email: user.email,
    subscription: user.subscription,
  })
}
module.exports = current
