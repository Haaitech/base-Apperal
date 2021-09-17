const input = document.querySelector('input[id="email"]');
const errorImg = document.querySelector(".error-img");
const msg = document.querySelector(".validation-msg");
const test = null;

input.addEventListener("invalid", function (e) {
	if (e.target.validity.valueMissing) {
		e.preventDefault();
		errorImg.classList.add("error-msg");
		msg.innerHTML = `please add your email!`;
		setTimeout(function () {
			errorImg.classList.remove("error-msg");
			msg.innerHTML = ``;
		}, 5000);
	}
	if (e.target.validity.typeMismatch) {
		e.preventDefault();
		errorImg.classList.add("error-msg");
		msg.innerHTML = `Enter a valid email adress!`;
		setTimeout(function () {
			errorImg.classList.remove("error-msg");
			msg.innerHTML = ``;
		}, 5000);
	}
});
