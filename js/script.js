
document.addEventListener("DOMContentLoaded", function(event) {


	/***************DROPDOWN MENU*************/
	
	let menu = document.getElementById('menu');
	let classes = menu.classList;

	//Au click sur le bouton Menu
	menu.addEventListener('click', function(){
		let down = classes.toggle('down');

		if(down) {
			displayDropDown();
	
		}else {
			hideDropDown();
		}

	});

	// On gère le cas où l'écran est > 750px 
	window.addEventListener("resize", function() {
		if (window.matchMedia("(min-width: 720px)").matches) {
			document.getElementById('menu-wrapper').style.display = "flex";
		} else {
			document.getElementById('menu-wrapper').style.display = "none";
		}
	  })


	/***************FACTS*******************/
	//Au click sur le bouton relaod des facts
	document.getElementById('facts-reload').addEventListener('click', displayFacts);




});
