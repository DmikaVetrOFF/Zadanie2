let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0],
	submit = document.getElementsByTagName('button')[1],
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('contactform_mail')[0],
	modal = document.querySelector('.modal'),
	overlay = document.querySelector('.overlay'),
	close = document.querySelector('.close'),
	back = document.querySelector('.back'),
	thanks = document.querySelector('.thanks'),
	text = document.getElementsByName('message')[0];

function hover () {
	heading.textContent = "Действительно все!"
};

function out () {
	heading.textContent = "Все включено!"
};

heading.addEventListener("click", hover);
heading.addEventListener("dblclick", function(){
	heading.textContent = "Все включено!"
});

receiveBtn.addEventListener('click', function(){
	modal.style.display = "block";
	overlay.style.display = "block"
});

close.addEventListener('click', function(){
	modal.style.display = "none";
	overlay.style.display = "none"
});

nameInput.addEventListener("input", function() {
	text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить:";

	if (nameInput.value == "") {
		text.value = ""
	}
});

submit.addEventListener('click', function () {
	modal.style.display = "none";
	thanks.style.display = "block";
});

back.addEventListener('click', function(){
	thanks.style.display = "none";
	overlay.style.display = "none"
});
