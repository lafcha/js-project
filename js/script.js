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


	/*********Gallery images*********/

	/*Delete an image*/
	let closeIcons = document.querySelectorAll('.close-img-icon');

	closeIcons.forEach(btn =>{
		btn.addEventListener('click', function (event) {
		
			deleteGalleryImg(event);
	
		});

	}) 


	/*********Gallery Form***********/

	//Au click sur le bouton + de la gallery
	document.getElementById('add-img-icon').addEventListener('click', toggleForm);


	//Au click sur n'importe quel bouton + des inputs
	let inputsPlus = document.querySelectorAll('.gallery-add-input');

	inputsPlus.forEach(item => {

		let nbOfInputs = 1;
		item.addEventListener('click', function () {

			if (nbOfInputs < 5) {
				addNewFormInput(nbOfInputs);

			} else if (nbOfInputs == 6) {
				displayInputsNbError();

			}
			nbOfInputs = nbOfInputs + 1;
		}

		)
	}
	);

	// Au click de soumission du formulaire 
	document.getElementById('gallery-form').addEventListener('submit', handleImageForm);

	/***************COMMENTS FORM*******************/

	//Lorsque le formulaire est soumis
	document.getElementById('comment-form').addEventListener('submit', handleForm);




});
