const sgMail = require('@sendgrid/mail')
require('dotenv').config()

const { SENDGRID_KEY } = process.env

sgMail.setApiKey(SENDGRID_KEY)

// const email = {
//   to: 'veili123@hotmail.com',
//   from: 'vekok12@gmail.com',
//   subject: 'Новая заявка с сайта',
//   html: '<p>Пришел заказ с сайта</p>'
// }

// sgMail.send(email)
//   .then(() => console.log('Email success send'))
//   .catch(error => console.log(error.message))

const sendEmail = async(data) => {
  const email = { ...data, from: 'vekok12@gmail.com' }
  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(email)
    return true
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
