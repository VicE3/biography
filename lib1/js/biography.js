
form.addEventListener(onsubmit, validate());




function validate() {

if(fname.length === 0) {
  alert("First Name is not filled out. Please enter your first name.");
}

if(lname.length === 0) {
  alert("Last Name is not filled out. Please enter your last name");
}

if(email.length !=== /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) {
  alert("Please enter a valid email.")
}

if(phone.length !=== /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) {
  alert("Please enter a valid phone number.")
}
}
