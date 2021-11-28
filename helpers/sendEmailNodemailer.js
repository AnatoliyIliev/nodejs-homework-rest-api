const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.office365.com',
  port: '586',
  // secure: 'STARTTLS',
  secure: 'false',
  auth: {
    user: 'veili123@hotmail.com',
    pass: EMAIL_PASSWORD,
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async(data) => {
  // const newEmail = { ...data, from: 'veili123@hotmail.com' }
  const newEmail = { ...data, from: 'info@ntonyartist.com' }
  // eslint-disable-next-line no-useless-catch
  try {
    await transporter.sendMail(newEmail)
  } catch (error) {
    throw error
  }
}

// const email = {
//   to: 'vekok12@gmail.com',
//   from: 'veili123@hotmail.com',
//   subject: 'Новая заявка с сайта',
//   html: '<p>Пришел заказ с сайта</p>'
// }

// const sendEmail = transporter.send(email)
//   .then(() => console.log('Email success send'))
//   .catch(error => console.log(error.message))

module.exports = sendEmail
