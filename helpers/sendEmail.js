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

// const email = {
//   to: 'vekok12@gmail.com',
//   from: 'veili123@hotmail.com',
//   subject: 'Новая заявка с сайта',
//   html: '<p>Пришел заказ с сайта</p>'
// }

// const email = {
//   to: 'veili123@hotmail.com',
//   from: 'vipa4ka@ukr.net',
//   subject: 'Новая заявка с сайта',
//   html: '<p>Пришел заказ с сайта</p>'
// }

// const sendEmail = sgMail.send(email)
//   .then(() => console.log('Email success send'))
//   .catch(error => console.log(error.message))

const sendEmail = async(data) => {
  // const newEmail = { ...data, from: 'vekok12@gmail.com' }
  const newEmail = { ...data, from: 'vipa4ka@ukr.net' }
  // console.log(newEmail)
  // eslint-disable-next-line no-useless-catch
  try {
    await sgMail.send(newEmail)
    return true
  } catch (error) {
    throw error
  }
}

module.exports = sendEmail
