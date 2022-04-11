
let pics = document.getElementsByClassName("gallery-pic");


/**
 * Displays gallery as a grid
 */
function displayGrid() {
  
    document.getElementById("gallery-container").style.flexDirection = "row";
    for (let i = 0; i < pics.length; i++) {
        pics[i].style.margin = "";
    }

}
/**
 * Displays image full width
 */
function displayFull() {
    document.getElementById("gallery-container").style.flexDirection = "column";
    for (let i = 0; i < pics.length; i++) {
        pics[i].style.margin = "auto";
    }
}

/**
 * Hide & show the form to add images
 */

function toggleForm() {
    let form = document.getElementById('gallery-form');
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }

}

function addNewFormInput(nbOfInputs) {

    let wrapper = document.createElement('div');
    wrapper.className = "gallery-input-wrap";

    let label = document.createElement('label');
    label.setAttribute('for', 'new-img');
    label.textContent = "Add a new url ";

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', 'new-img');
    input.className = "gallery-url-input";

    input.id = 'new-img-' + nbOfInputs;
   

    //TODO: Créer une span dans une span pour éviter le problème (le clic ne fonctionne pas sur les inputs créés)
    let plusSymbolWrapper = document.createElement('span');
    let plusSymbol = document.createElement('span');
    plusSymbolWrapper.classList.add("gallery-add-input");
    plusSymbol.classList.add('iconify');
    plusSymbol.setAttribute('data-icon', "akar-icons:plus");

    wrapper.append(label);
    wrapper.append(input);
    wrapper.append(plusSymbol);

    document.querySelector('.gallery-inputs').append(wrapper);
}

function displayInputsNbError(){

    let error = document.createElement('div');
    error.classList.add('link-nb-error')
    error.textContent = "You cannot upload more than 5 images";

    let parent = document.querySelector("#gallery-form > p");

    parent.append(error);


}