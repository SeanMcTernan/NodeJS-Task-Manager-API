const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'sean@beyondthesummitpdd.com',
    subject: 'Welcome to the app!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app. `
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email, 
    from: 'sean@beyondthesummitpdd.com',
    subject: 'Your account has been canceled',
    text: `Hi ${name}, we see you canceled your account. So sorry to see you go, was there anything we could have done better?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}