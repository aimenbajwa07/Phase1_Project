function add() {
   
           var hr = document.createElement("hr");
           
           var h2 = document.createElement("H2");
           h2.className = "featurette-heading";

           var div1 = document.createElement("div");
           div1.className = "row featurette";

           var div2 = document.createElement("div");
           div2.className = "col-md-7";

           var para2 = document.createElement("P");
           para2.className = "lead";
           var para3 = document.createElement("P");
           para3.className = "lead";
           var para4 = document.createElement("P");
           para4.className = "lead";



           var title = document.getElementById("title").value;
           var author = document.getElementById("author").value;
           var date = document.getElementById("date").value;
           var content = document.getElementById("content").value;

           var t1 = document.createTextNode(title);
           var t2 = document.createTextNode(author);
           var t3 = document.createTextNode(date);
           var t4 = document.createTextNode(content);
          

           h2.appendChild(t1);
           para2.appendChild(t2);
           para3.appendChild(t3);
           para4.appendChild(t4);

           //div1.appendChild(para2);
           div2.appendChild(h2);
           div2.appendChild(para2);
           div2.appendChild(para3);
           div2.appendChild(para4);


           document.body.prepend(div2);
           document.body.prepend(div1);
           document.body.prepend(hr);
        }

function printError(element, msg) {
    document.getElementById(element).innerHTML = msg;
}


function validateForm() {

    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;
    
    var nameErr = emailErr = subjectErr = messageErr = true;

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }


    // Validate subject
    if (subject == "") {
        printError("subjectErr", "Please enter a subject line");
    } else {
            printError("subjectErr", "");
            subjectErr = false;
        
    }

     // Validate message
     if (message == "") {
        printError("messageErr", "Please enter a message");
    } else {
            printError("messageErr", "");
            messageErr = false;
        
    }

    if (nameErr || emailErr || subjectErr || messageErr  == true) {
        return false;
    } else {
        alert('You have submitted the form..')
    }
}