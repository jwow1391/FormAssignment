function validate() {
	"use strict";
	
	var firstName = document.register.firstName.value;
	var valName = /[a-z A-z]{2,62}/;
	var lastName = document.register.lastName.value;
	var valLast = /[a-z A-z]{2,62}/;
	var email = document.register.emailAddress.value;
	var valEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{4,63}/;
	var password = document.register.password.value;
	var valPassword = /[a-z A-Z]\w {7, 14} $/;
	/* When I type in 8 or more characters it still gives me an alert box saying I need to fill out that field. I am not sure why it gives me that. I feel like I dont have my valPassword right. */
	var zip = document.register.zip.value;
	var valZip = / \d {5}/;
	/* I am not sure why this doesnt work like how it should. I have the d for digits and the 5 for how many numbers but when I hit sumbit it doesn't matter what is in there. It will still give me the pop up box. */
	
	/*var text= document.register.textarea.value;
	var valText = /[a-z A-z]{2,256}/;*/

	if (!valName.test(firstName)) {
		alert('Please provide your First Name');
	}
	
	if (!valLast.test(lastName)) {
		alert('Please provied your Last Name');
	}
	
	if (!valEmail.test(email)) {
		alert('Please provide your Email Address');
	}
	
	if (!valPassword.test(password)) {
		alert('Please provide a Password that is 8 characters or more');
	}
	
	if(document.register.address.value.length<2) {
		alert('please provide your Address');
	}
	
	if(document.register.city.value.length<2) {
		alert('please provide your City');
	}
	
	if (!valZip.test(zip)) {
		alert('Please provide your Zip Code');
	}
	
	/*if (!valText.test(textarea)) {
		alert('Please provide your reason for return');
	}
	I tried to to validate the text box but I couldnt get it to work the way I wanted too. When I would do what I have it wouldnt validate any of my boxes.*/
}
