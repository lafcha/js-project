$(document).ready(function(){

    /*********FACTS************/
    // Au lancement de la page
	getFiveFacts();

	//Au click sur le bouton relaod des facts
	$('#facts-reload').click(getFiveFacts);


	function getFiveFacts() {
		console.log("hello")

		$.ajax({
			url: "https://api.spaceflightnewsapi.net/v3/articles?_limit=5",
			//La méthode d'envoi (type de requête)
			method: "GET",
			//Le format de réponse attendu
			dataType: "json",
		}).then(function (data) {
			 

			$('#facts-container').empty()
			// Get the number of data gotten by the API
			let nbOfFacts = data.length;

			// Getting the facts-section

			for (let i = 0; i < nbOfFacts; i++) {

				let article = data[i];

				createArticle(article);
			
			}
		})

		.fail(function(error){
			alert("La requête s'est terminée en échec. Infos : " + JSON.stringify(error));
		})


	}

	function createArticle(article) {
	
		
		//Creation of the article 
		let newArticle = $("<article class=\"fact-container\"></article>");

		//Creation of title container
		newArticle.append("<div class=\"title-container\"><h3>" + article.title + "</h3></div>");

		// Création de contentContainer 
		let contentContainer = $("<div class=\"content-container\"></div>");

		contentContainer.append("<div class=\"fact-image\"><img src=\"" + article.imageUrl + "\"/>");
		
		//Création de details	
		let articleDetail = $("<div class=\"article-details\"></div>");
		//Ajout des enfants

		//Recouper la date

		let date =  article.publishedAt.slice(0,10)

		articleDetail.append("<p class=\"article-publication-date article-detail\">Published on: " + date + "</p>");
		articleDetail.append("<p class=\"article-website article-detail\">Website:" + article.newsSite + "</p>");
		articleDetail.append("<a class=\"article-visit-button article-detail\" href=\"" + article.url + "\">Visit</a>");
		// On relie à containContainer
		contentContainer.append(articleDetail)

		//On relie contentContainer à newsArticle
		newArticle.append(contentContainer);
		
		//On ajoute l'article crée à facts-container
		$('#facts-container').append(newArticle);
	}
    
});