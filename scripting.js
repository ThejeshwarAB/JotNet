function toggle()
{
	document.getElementById("content").classList.toggle('after');
}

function info()
{
	document.getElementById("ins").classList.add('after');
}

function home()
{
	document.getElementById("ins").classList.remove('after');
}


function save()
{
    	
        const text = document.getElementById("textarea");
        let data = text.value;
        if (data!= "")
        // Convert the text to BLOB.
        {const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'Yourtext.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        // if (window.webkitURL != null) {
        //     newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        // }
        // else {
        //     newLink.href = window.URL.createObjectURL(textToBLOB);
        //     newLink.style.display = "none";
        //     document.body.appendChild(newLink);
        // }
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        newLink.click();}
}

function clearing()
{
	var t = prompt("Do you want to clear the text?(Y/N)");
	if (t == "Y" || t == "y")
	{
		document.getElementById("textarea").value="";
	}
}

function sending(){
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

}