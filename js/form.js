let errorsArray = [];

/**
 * 
 * @param {*} event 
 */
function handleForm(event) {

    let nameInputValue = document.getElementById('name-input').value;
    let commentInputValue = document.getElementById("comment-input").value;

    event.preventDefault();

    formValidation(nameInputValue, commentInputValue);

    if (errorsArray.length == 0) {
        addNewComment(commentInputValue, commentInputValue);
        // On vide les inputs
        document.getElementById('name-input').value = "";
        document.getElementById("comment-input").value = "";

    } else {
        displayFormErrors();
    }

    console.log(errorsArray);
    //Vider errorsArray
    //vIDER input

};

/**
 * 
 */
function formValidation(nameInputValue, commentInputValue) {
    inputValidation(nameInputValue, 'Name');
    inputValidation(commentInputValue, 'Comment');
    if (containsSpecialChars(nameInputValue)) {
        errorsArray.push('chars')
    }
}
/**
 * 
 * @param {*} inputValue 
 * @param {*} inputName 
 */

function inputValidation(inputValue, inputName) {

    let inputValueTrimmed = inputValue.trim();
    if (inputValueTrimmed.length == 0) {
        errorsArray.push('empty' + inputName)
    } else if (inputValue.length < 2) {
        errorsArray.push('tooShort' + inputName)
    }
}
/**
 * 
 * @param {*} input 
 * @returns 
 */

function containsSpecialChars(input) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(input);
}


function addNewComment(nameInputValue, commentInputValue) {
    let commentWrapper = document.getElementById('comments');

    //Création du nouveau commentaire
    let newComment = document.createElement("div");
    newComment.className = 'comment';

    //Création de la div comment-detail
    let commentDetail = document.createElement("div");
    commentDetail.className = 'comment-detail';

    //Création du h3
    let commentTitle = document.createElement("h3");
    commentTitle.innerHTML = "Written By " + nameInputValue + " ";

    //Création de la date
    let commentDate = document.createElement("p");
    commentDate.className = "comment-date";

    //Récupération & formatage de la date du jour
    let today = new Date();
    let options = { month: 'long' };
    let month = new Intl.DateTimeFormat('en-US', options).format(today.getMonth() + 1);
    var date = " ON " + month + " " + today.getDate() + " " + today.getFullYear() + " | " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    commentDate.innerHTML = date;

    //On raccroche h3 & date à detail
    commentDetail.appendChild(commentTitle);
    commentDetail.appendChild(commentDate);

    //Création de commentText
    let commentText = document.createElement("div");
    commentText.className = "comment-text";
    commentText.innerHTML = commentInputValue;


    //On raccroche commentDetail & commentText à newComment
    newComment.appendChild(commentDetail);
    newComment.appendChild(commentText);


    //Ajout de newComment en haut de la liste
    commentWrapper.insertBefore(newComment, commentWrapper.children[0]);




}


function displayFormErrors() {

}

