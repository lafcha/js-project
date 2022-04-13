function displayGame() {

    $.ajax({
        url: "https://demo8081299.mockable.io/",
        //La méthode d'envoi (type de requête)
        method: "GET",
        //Le format de réponse attendu
        dataType: "json",
    }).then(function (data) {

        displayAttempts(data);
        displayCards(data);

    })

        .fail(function (error) {
            displayGameLoadingError(error);
        })

}

function displayCards(data) {

    let files = data[0].fichiers;

    let cardPatternArray = [];

    let pairNb = data[0].paires;

    let cardPattern = createCardPattern(cardPatternArray, pairNb);

    console.log(cardPattern);

    for (let i = 0; i < cardPattern.length; i++) {
     
        // HTML Creation
        const gameWrapper = document.getElementById('game-wrapper');

        let cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        let outerSpan = document.createElement('span');
        outerSpan.classList.add('card-back-icon');

        let innerSpan = document.createElement('span');
        innerSpan.classList.add('iconify');
        innerSpan.setAttribute('data-icon', "majesticons:planet-ring-2");

        outerSpan.append(innerSpan);
        cardBack.append(outerSpan);
        gameWrapper.append(cardBack);

    }

}

function displayAttempts(data) {
    const attemptsText = document.getElementById('attempts');

    let attemptsNb = data[0].tentativesMax;

    let attempts = document.createTextNode(attemptsNb);

    attemptsText.appendChild(attempts);

}

function displayGameLoadingError(error) {

    //Get wrapper
    let wrapper = document.getElementById("game-details");

    let errorMessage = document.createElement("p");
    errorMessage.textContent = "Sorry, the game could not load! Error: " + error;
    wrapper.append(errorMessage);

}

function createCardPattern(array, max) {

    let setArray1 = createASetArray(max);
    let setArray2 = createASetArray(max);

    for (let i = 0; i < setArray1.length; i++) {
        array.push(setArray2[i]);
    }

    for (let i = 0; i < setArray2.length; i++) {
        array.push(setArray2[i]);
    }

    return array;
}

function createASetArray(max) {
    let setArray = [];

    while (setArray.length < max) {
        let randomNb = Math.floor(Math.random() * max);
        if (!setArray.includes(randomNb)) {
            setArray.push(randomNb);
        }
    }

    return setArray;

}

