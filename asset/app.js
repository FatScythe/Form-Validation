const form = document.querySelector('form');
const nameError = document.querySelector('.fname-error');
const phoneError = document.querySelector('.phone-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const buttonError = document.querySelector('.button-error');
const btn = document.querySelector('form button');
const popup = document.querySelector('.wrapper');
const cancel = document.querySelector('.cancel');


// Live feedback

// Full name field

function validateFname(){
	let namePattern = /^(\w+ )+\w+$/;

	// let namePattern = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

	let name = document.querySelector('#fullname').value;
	if(name.length == 0) {
		nameError.textContent = 'fullname is required';
		return false;
	}
	if(!name.match(namePattern)){
		nameError.textContent = 'Write full name';
		return false;
	}

	nameError.innerHTML = `<img src="asset/done.png" alt="done">`;
	return true;	
} 

function validatePhone() {
	let number = document.querySelector('#number').value;
	let numberPattern = /^[0-9]{11}$/

	if(number.length == 0) {
		phoneError.textContent = 'Phone no. is required';
		return false;
	}

	if(!number.match(numberPattern)){
		phoneError.textContent = '11 digits only';
		return false;
	}

	phoneError.innerHTML = `<img src="asset/done.png" alt="done">`;
	return true;
}

function validateEmail() {
	let email = document.querySelector('#email').value;
	let emailPattern = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/

	if(email.length == 0) {
		emailError.textContent = 'Email is required';
		return false;
	}

	if(!email.match(emailPattern)){
		emailError.textContent = 'Invalid Email';
		return false;
	}

	emailError.innerHTML = `<img src="asset/done.png" alt="done">`;
	return true;
}

function validateMessage() {
	let msg = document.querySelector('#msg').value;
	let requiredMsg = 30;
	let left = requiredMsg - msg.length;

	if (left > 0) {
		messageError.textContent = `${left} more characters required`;
		return false;	
	}
	messageError.innerHTML = `<img src="asset/done.png" alt="done">`;
	return true;


}

form.addEventListener('submit', e => {
	// Prevent default behaviour of Submit button
	e.preventDefault();
	if(!validateFname() || !validatePhone() || !validateEmail() || !validateMessage()) {
		buttonError.style.display = 'block';
		buttonError.textContent = "Please fix error to submit";
		// Above message will be hidden after 5s
		setTimeout(function(){ buttonError.style.display = 'none';}, 5000)
		return false;
	} else {
	buttonError.textContent = "";
	btn.addEventListener('click', e => {
		popup.style.display = 'flex';
	});
	cancel.addEventListener('click', () => {
		popup.style.display = 'none';
	});

	popup.addEventListener('click', () => {
		popup.style.display = 'none';
	});
	}

});





