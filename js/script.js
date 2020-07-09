
 var link = document.querySelector(".feedback-link");
 var popup = document.querySelector(".feedback-display");
 var popupmodal = document.querySelector(".feedback-block");
 var close = document.querySelector(".modal-close");
 var login = popup.querySelector("[name=name]");
 var form = popup.querySelector("form");
 var email = popup.querySelector("[name=email]");
 var feedback = popup.querySelector("[name=message]");

 var isStorageSupport = true;
 var storage = "";

 try {
 	storage = localStorage.getItem("name");
 }	catch (err) {
 	isStorageSupport = false;
 }


 link.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.add("modal-show");


 		if (storage) {
 			login.value = storage;
 			email.focus();
 		} else {
 			login.focus();
 		}
 });

 close.addEventListener("click", function (evt) {
     evt.preventDefault();
 		popup.classList.remove("modal-show");
 		popupmodal.classList.remove("modal-error");
 });

 form.addEventListener("submit", function (evt) {
 	if (!login.value || !email.value || !message.value) {
     evt.preventDefault();
	 popupmodal.classList.remove("modal-error");
	 popupmodal.offsetWidth = popupmodal.offsetWidth;
	 popupmodal.classList.add("modal-error");
 	} else {
 		if (isStorageSupport) {
 		localStorage.setItem("login", login.value);
 		}
 	}
 });

 window.addEventListener("keydown", function (evt) {
 	if (evt.keyCode === 27) {
 		if (popup.classList.contains("modal-show")) {
 			evt.preventDefault();
 		popup.classList.remove("modal-show");
 			}
 		}
 	});
