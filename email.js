const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000




app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Sample')
})

app.post('/process_post', function (req, response) {
    // Prepare output in JSON format  
    console.log(req.body);


    var transporter = nodemailer.createTransport({
        service: 'gmail',

        auth: {
            user: 'nuser3899@gmail.com', //email address to send from
            pass: '123.user',

        }
    })

    var mailOptions = {
        from: 'User <nuser3899@gmail.com>',
        to: 'abibastheja@gmail.com',
        subject: 'Nodemailer test',
        text: 'Yeah, this is working!!'
    }

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log('Error here', err);

            response.send(err);
        } else {
            console.log('Email Sent');

            response.send('success');
        }
    })


})


app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});