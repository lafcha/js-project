$(document).ready(function () {

	// Au lancement de la page
	getFiveFacts();

	//Au click sur le bouton relaod des facts
	$('#facts-reload').click(getFiveFacts);


	function getFiveFacts() {

		$.ajax({
			url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=5",
			//La méthode d'envoi (type de requête)
			method: "GET",
			//Le format de réponse attendu
			dataType: "json",
		}).then(function (data) {

			console.log(data)

			$('#facts-container').empty()
			// Get the number of data gotten by the API
			let nbOfFacts = data.length;

			// Getting the facts-section

			for (let i = 0; i < nbOfFacts; i++) {

				let article = data[i];

				$('#facts-container').append(
					"<article class=\"fact-container\"><div class=\"title-container\"><h3>" + article.title + "</h3><div class=\"content-container\"><div class=\"fact-image\"><img src=\""+ article.imageUrl +"\"/></div><div class=\"article-details\"><p class=\"article-publication-date article-detail\">Published on:" + article.publishedAt +"</p><p class=\"article-website article-detail\">Website:" + article.newsSite + "</p><a class=\"article-visit-button article-detail\" href=\""+ article.url +"\">Visit</a></div></div></article>"
				)

			}
		})




	}
})