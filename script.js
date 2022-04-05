$(document).ready(function () {

	// Au lancement de la page
	getFiveFacts();

	//Au click sur le bouton relaod des facts
	$('#facts-reload').click(getFiveFacts);


	function getFiveFacts() {

		$.ajax({
			url: "https://catfact.ninja/facts?limit=5",
			//La méthode d'envoi (type de requête)
			method: "GET",
			//Le format de réponse attendu
			dataType: "json",
		}).then(function (data) {

			$('#facts-container').empty()
			// Get the number of data gotten by the API
			let nbOfFacts = data.data.length;

			// Getting the facts-section

			for (let i = 0; i < nbOfFacts; i++) {

				//Adding Fact nb
				let factNb = i + 1;
				let catFact = data.data[i].fact;
				let factSection = $('#facts-section');
				console.log('fact-section', factSection);
				$('#facts-container').append(
					"<h3 class=\"fact-nb\">Fact n°" + factNb + "</h3><div class=\"fact-line\"></div><p class=\"fact-p\">" + catFact + "</p>"
				)

			}
		})




	}
})