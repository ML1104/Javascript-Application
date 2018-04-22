'use strict';

agCookie.create('example-cookie', true, 1);

var readValue = agCookie.read('example-cookie');
console.log(readValue);

agCookie.erase('example-cookie');
'use strict';

console.log('I have entered this file.');
console.log('This is crystal clear evidence that this works.');

var calculation = 200 + 223;

console.log('Sanity Check: 200 + 223 = ' + calculation);
console.log('bye.');
"use strict";

function formValidate() {
	var emailField = document.forms["contact"]["emailfield"].value;
	var phoneField = document.forms["contact"]["phonefield"].value;
	var nameField = document.forms["contact"]["namefield"].value;
	var surnameField = document.forms["contact"]["surnamefield"].value;
	var messageField = document.forms["contact"]["messagefield"].value;

	if (emailField == "" || emailField == null) {
		alert("Email must be filled out");
		return false;
	}

	if (isNaN(phoneField)) {
		alert("Only numbers allowed in phone field");
		return false;
	}

	if (nameField == "" || nameField == null) {
		alert("Name must be filled out");
		return false;
	}

	if (!isNaN(nameField)) {
		alert("Name cannot contain numbers");
		return false;
	}

	if (surnameField == "" || surnameField == null) {
		alert("Surname must be filled out");
		return false;
	}

	if (!isNaN(surnameField)) {
		alert("Surname cannot contain numbers");
		return false;
	}

	if (messageField == "" || messageField == null) {
		alert("Message cannot be empty");
		return false;
	} else {
		document.getElementById("submitForm").submit();
	}
}