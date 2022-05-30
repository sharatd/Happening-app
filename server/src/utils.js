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

/*
const adminEmails = [
  'NirajShah2023@u.northwestern.edu',
  'WillXenakis2023@u.northwestern.edu',
  'MatthewBeretta2023@u.northwestern.edu',
];
*/
const adminEmails = [
  'SpencerFitch2022@u.northwestern.edu',
  'yabiayele2023@u.northwestern.edu',
  'jacksonmiller2023@u.northwestern.edu',
  'sharatdhananjaya2023@u.northwestern.edu',
  'quintonnickum2022@u.northwestern.edu'
];

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
