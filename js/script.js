
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

	/***************FACTS*******************/
	//Au click sur le bouton relaod des facts
	document.getElementById('facts-reload').addEventListener('click', displayFacts());




});
