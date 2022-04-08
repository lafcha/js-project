

    function displayFacts() {

        const request = new Request('https://api.spaceflightnewsapi.net/v3/articles?_limit=5');

        fetch(request)

            .then(response => response.json())
            .then(
                function (data) {
                    createAllArticles(data);
                }
            )
            .catch(function (error) {

                displayError(error);
            })

    }

    function createAllArticles(data) {
        let factsContainer = document.getElementById('facts-container');
        factsContainer.innerHTML = "";

        // Get the number of data gotten by the API
        let nbOfFacts = data.length;

        // Getting the facts-section

        for (let i = 0; i < nbOfFacts; i++) {

            let article = data[i];

            createArticle(article);

        }
    }


    function createArticle(article) {


        //Creation of the article 
        let newArticle = document.createElement("article");
        newArticle.className = 'fact-container';

        //Creation of title container
        newArticle.innerHTML = "<div class=\"title-container\"><h3>" + article.title + "</h3></div>";

        // Création de contentContainer 
        let contentContainer = document.createElement("div");
        contentContainer.className = 'content-container';

        contentContainer.innerHTML = "<div class=\"fact-image\"><img src=\"" + article.imageUrl + "\"/>";

        //Création de details	
        let articleDetails = document.createElement("div");
        articleDetails.className = "article-details";
        //Ajout des enfants

        //Recouper la date
        let dateFromAPI = article.publishedAt.slice(0, 10);

        // On créer les éléments

        //Details 
        let articleDetail = document.createElement('p');
        articleDetail.className = 'article-publication-date article-detail';
        articleDetail.innerHTML = "Published on: " + dateFromAPI;
        articleDetails.appendChild(articleDetail);

        //Website
        let website = document.createElement('p');
        website.className = 'article-website article-detail';
        website.innerHTML = "Website: " + article.newsSite;
        articleDetails.appendChild(website);

        //Visit Button
        let visitButton = document.createElement('a');
        visitButton.className = 'article-visit-button article-detail';
        visitButton.setAttribute('src', article.url);
        visitButton.innerHTML = "Visit";
        articleDetails.appendChild(visitButton);

        // On relie à containContainer
        contentContainer.appendChild(articleDetails)


        newArticle.appendChild(contentContainer);

        let factsContainer = document.getElementById('facts-container');
        factsContainer.appendChild(newArticle);

    }

    function displayError(error) {
        let alert = document.createElement('div');
        alert.className = 'facts-subtitle';
        alert.innerHTML = "Le serveur n'a pas répondu. Erreur " + error;

        let subtitle = document.getElementById('facts-subtitle');
        let factsSection = document.getElementById('facts-section');
        factsSection.removeChild(subtitle);
        factsSection.appendChild(alert);
    }

