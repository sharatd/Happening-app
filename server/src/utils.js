const { createTransport } = require('nodemailer');

const sender = 'xenahdevportal@gmail.com';
const password = 'xenahdevportal1!';

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password,
  }
});

const adminEmails = ['will@xenah.dev'];

const sendAdminEmail = (subject, text, html) => {
  adminEmails.forEach((adminEmail) => {
    const mailOptions = {
      from: sender,
      to: adminEmail,
      subject,
      text,
      html
    }
    try {
      transporter.sendMail(mailOptions);
    } catch (err) {
      console.log(err)
    }
  })
}

module.exports = {
  sendAdminEmail
}
