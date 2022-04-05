$(document).ready(function () {

	$.ajax({
		url: "https://catfact.ninja/facts?limit=5",
		//La méthode d'envoi (type de requête)
		method: "GET",
		//Le format de réponse attendu
		dataType: "json",
	}).then(function (data) {
		
		//console.log("status vérifié", data.status.verified)

		// Get all paragraphs 

	let allArticles = document.getElementsByClassName('fact-p');
	let allfactsNb = document.getElementsByClassName('fact-nb');


	//Get data according to the matching index of allParagraphs table

	for (let i = 0; i < allArticles.length; i++) {
	
		//Facts
		let paragraph = allArticles[i];
		let catFact = data.data[i].fact;
		paragraph.append(catFact);

		//Fact nb
		let factNb = i+1;
		let factNbParagraph = allfactsNb[i];
		factNbParagraph.append(factNb);
	
	};
	})
	

	
})