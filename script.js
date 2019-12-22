function toggle() {
    document.getElementById("content").classList.toggle('after');
}

function info() {
    document.getElementById("ins").classList.add('after');
}

function home() {
    document.getElementById("ins").classList.remove('after');
}


function save() {

    const data = document.getElementById("textarea").value;
    if (data != "")
    // Convert the text to BLOB.
    {
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'Text.txt';	   // The file to save the data.

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
        newLink.click();
    }
}

function clearing() {
	
	const data = document.getElementById("textarea").value;
    if (data != "")
    {
    	var t = prompt("Do you want to clear the text?(Y/N)");
    if (t == "Y" || t == "y") 
    {
        document.getElementById("textarea").value = "";
    }
	}
}

function sending() {

    var message = document.getElementById("textarea").value;
    var mail = prompt("Enter MailID:");
    var subject = prompt("Enter subject:");

    console.log(message);
    $.post("https://jotnet.herokuapp.com/",
        {
            text: message,
            mail: mail,
            subject: subject
        },
        function (message) {
            console.log(message);
            alert(message);
        });

}
