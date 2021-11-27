const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.office365.com',
  port: '586',
  secure: 'STARTTLS',
  auth: {
    user: 'veili123@hotmail.com',
    pass: EMAIL_PASSWORD,
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

// const email = {
//   to: 'vekok12@gmail.com',
//   from: 'veili123@hotmail.com',
//   subject: 'Новая заявка с сайта',
//   html: '<p>Пришел заказ с сайта</p>'
// }

// const sendEmail = transporter.send(email)
//   .then(() => console.log('Email success send'))
//   .catch(error => console.log(error.message))

const sendEmail = async(data) => {
  const email = { ...data, from: 'vekok12@gmail.com' }
  // eslint-disable-next-line no-useless-catch
  try {
    await transporter.send(email)
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
