document.addEventListener("DOMContentLoaded", function (event) {


	/***************DROPDOWN MENU*************/

	let menu = document.getElementById('menu');
	let classes = menu.classList;

	//Au click sur le bouton Menu
	menu.addEventListener('click', function () {
		toggleMenu(classes, "menu-wrapper");
	});

	// On gère le cas où l'écran est > 750px 
	window.addEventListener("resize", function () {
		if (window.matchMedia("(min-width: 720px)").matches) {
			displayMenu("menu-wrapper");
		} else {
			hideMenu("menu-wrapper");
		}
	})

	/***************FACTS*******************/

	//Au click sur le bouton relaod des facts
	document.getElementById('facts-reload').addEventListener('click', displayFacts);


	/***************GALLERY*******************/
	document.getElementById('display-grid').addEventListener('click', displayGrid);
	document.getElementById('display-full').addEventListener('click', displayFull);

	/*********Gallery Form***********/

	//Au click sur le bouton +
	document.getElementById('add-img-icon').addEventListener('click', toggleForm);

	/***************COMMENTS FORM*******************/

	//Lorsque le formulaire est soumis
	document.getElementById('comment-form').addEventListener('submit', handleForm);




});
