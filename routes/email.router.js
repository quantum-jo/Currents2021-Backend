const router = require('express').Router();
var nodemailer = require('nodemailer');
const creds = require('../config/mail.config');

router.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });
  var name = req.body.name
  var email = req.body.email
  var institute= req.body.institute
  var message = req.body.message
  

  const mailOptions = {
    from: '"Currents WebOps" <currents.webops@gmail.com>',
    to: 'eee.currents@gmail.com',
    subject: `Contact Us Form - Mail Notif`,
    text: `Name: ${name} \n Email: ${email} \n Institute: ${institute} \n  Message: ${message} `
  };
  

  transporter.sendMail(mailOptions, function(error){
    if (error) {
      res.json(error);
    } else {
      res.json("email sent");
    }
  });  
})


module.exports = router;