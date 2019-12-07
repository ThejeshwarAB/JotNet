const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: 'nuser3899@gmail.com', //email address to send from
        pass: '123.user' ,

    }
})

var mailOptions = {
    from: 'User <nuser3899@gmail.com>',
    to: 'abibastheja@gmail.com',
    subject: 'Nodemailer test',
    text: 'Yeah, this is working!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log('Error here', err);
    } else {
        console.log('Email Sent');
    }
})
xhttp.open("POST", "localhost:3000/login", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Bruce");