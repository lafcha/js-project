

    function toggleMenu(classes, target) {
        let down = classes.toggle('down');

		if(down) {
			displayMenu(target);
	
		}else {
			hideMenu(target);
		}

    }

    function displayMenu(target) {
           
        document.getElementById(target).style.display = "flex";

    }

    function hideMenu(target){

        document.getElementById(target).style.display = "none";
    }





